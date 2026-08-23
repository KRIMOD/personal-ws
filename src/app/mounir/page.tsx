'use client';

import { useEffect, useRef, useState, type ChangeEvent } from 'react';
import html2canvas from 'html2canvas';

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
const initialColors = ['#173f5f', '#20639b', '#3caea3', '#f6d55c'];

export default function MounirPage() {
  const [colors, setColors] = useState(initialColors);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [palette, setPalette] = useState('Palette 3');
  const [volume, setVolume] = useState('Volume 5');
  const [error, setError] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      if (backgroundImage) {
        URL.revokeObjectURL(backgroundImage);
      }
    };
  }, [backgroundImage]);

  function handleColorChange(index: number, value: string) {
    setColors((current) =>
      current.map((color, colorIndex) =>
        colorIndex === index ? value : color
      )
    );
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setError(null);

    if (!file) {
      setBackgroundImage(null);
      return;
    }

    if (!file.type.startsWith('image/')) {
      setError('Choose a valid image file.');
      event.target.value = '';
      return;
    }

    if (file.size > MAX_IMAGE_SIZE) {
      setError('The background image must be smaller than 5 MB.');
      event.target.value = '';
      return;
    }

    setBackgroundImage(URL.createObjectURL(file));
  }

  async function downloadImage() {
    if (!previewRef.current || isDownloading) {
      return;
    }

    setError(null);
    setIsDownloading(true);

    try {
      await document.fonts.ready;
      const canvas = await html2canvas(previewRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true,
      });
      const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob((result) => {
          if (result) {
            resolve(result);
          } else {
            reject(new Error('The image could not be generated.'));
          }
        }, 'image/png');
      });
      const downloadUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = 'palette.png';
      link.href = downloadUrl;
      link.click();
      window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 60_000);
    } catch {
      setError('The palette could not be downloaded. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <section aria-labelledby="palette-title">
      <header className="mb-8 max-w-xl">
        <h1 id="palette-title" className="font-serif text-3xl font-bold">
          Palette card studio
        </h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">
          Choose four colors, add an optional background, and export the card as
          a PNG.
        </p>
      </header>

      <div className="grid max-w-[500px] gap-6">
        <fieldset>
          <legend className="mb-3 text-sm font-medium">Palette colors</legend>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {colors.map((color, index) => (
              <label
                key={index}
                htmlFor={`color-${index}`}
                className="flex items-center justify-between gap-2 rounded-lg border border-neutral-200 p-2 text-sm dark:border-neutral-700"
              >
                <span>Color {index + 1}</span>
                <input
                  id={`color-${index}`}
                  type="color"
                  value={color}
                  onChange={(event) =>
                    handleColorChange(index, event.target.value)
                  }
                  className="h-9 w-9 cursor-pointer rounded border-0 bg-transparent p-0"
                />
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-4 sm:grid-cols-2">
          <label htmlFor="palette" className="grid gap-2 text-sm font-medium">
            Palette
            <input
              id="palette"
              type="text"
              value={palette}
              maxLength={40}
              onChange={(event) => setPalette(event.target.value)}
              className="rounded-lg border border-neutral-300 bg-white p-2.5 text-neutral-900 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
            />
          </label>
          <label htmlFor="volume" className="grid gap-2 text-sm font-medium">
            Volume
            <input
              id="volume"
              type="text"
              value={volume}
              maxLength={40}
              onChange={(event) => setVolume(event.target.value)}
              className="rounded-lg border border-neutral-300 bg-white p-2.5 text-neutral-900 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
            />
          </label>
        </div>

        <label
          htmlFor="background-image"
          className="grid gap-2 text-sm font-medium"
        >
          Background image
          <input
            id="background-image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            aria-describedby="background-help palette-error"
            className="block w-full rounded-lg border border-neutral-300 bg-white p-2.5 text-sm text-neutral-900 file:mr-3 file:rounded-md file:border-0 file:bg-neutral-100 file:px-3 file:py-2 file:text-sm file:font-medium dark:border-neutral-600 dark:bg-neutral-800 dark:text-white dark:file:bg-neutral-700"
          />
          <span
            id="background-help"
            className="font-normal text-neutral-500 dark:text-neutral-400"
          >
            PNG, JPEG, WebP, or another browser-supported image up to 5 MB.
          </span>
        </label>
      </div>

      {error ? (
        <p
          id="palette-error"
          role="alert"
          className="mt-4 text-sm text-red-700 dark:text-red-300"
        >
          {error}
        </p>
      ) : null}

      <div
        ref={previewRef}
        className="mx-auto mt-10 w-full max-w-[500px] rounded-sm border p-4 text-xs"
        style={{
          backgroundColor: '#ffffff',
          borderColor: '#d4d4d4',
          color: '#171717',
          ...(backgroundImage
            ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }
            : {}),
        }}
      >
        <div className="py-28 sm:py-40">
          <div
            className="mb-2 flex justify-between gap-4 rounded-sm px-2 py-2 font-medium uppercase"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#000000' }}
          >
            <span>{palette || 'Untitled palette'}</span>
            <span>{volume || 'No volume'}</span>
          </div>
          <div className="flex flex-col gap-2">
            {colors.map((color, index) => (
              <div
                key={index}
                className="relative h-20"
                style={{ backgroundColor: color }}
              >
                <span
                  className="absolute right-2 bottom-2 rounded-sm px-1.5 py-0.5 font-medium"
                  style={{ backgroundColor: '#ffffff', color: '#171717' }}
                >
                  {color.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
        <p
          className="w-full pt-3 text-center text-sm font-medium"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#404040' }}
        >
          ZUMROD
        </p>
      </div>

      <div className="flex w-full justify-center pt-4">
        <button
          type="button"
          onClick={downloadImage}
          disabled={isDownloading}
          className="rounded bg-neutral-800 px-4 py-2 text-sm font-medium text-white outline-none hover:bg-neutral-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-60 dark:bg-neutral-200 dark:text-neutral-900 dark:hover:bg-white"
        >
          {isDownloading ? 'Preparing download…' : 'Download PNG'}
        </button>
      </div>
    </section>
  );
}
