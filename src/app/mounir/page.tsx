'use client';
import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({ weight: '400', subsets: ['latin'] });

export default function Mounir() {
  // const colors = ['#FF5733', '#33FF57', '#5733FF', '#33FFF5'];
  const [colors, setColors] = useState(['', '', '', '']);
  const [backgroundImage, setBackgroundImage] = useState(null);

  const [palette, setPalette] = useState('Palette 3');
  const [volume, setVolume] = useState('Volume 5');

  const handleInputChange = (index, event) => {
    const newColors = [...colors];
    newColors[index] = event.target.value;
    setColors(newColors);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // For this example, we simply prevent default and let the colors be set.
    // In a real-world app, you might want to validate the hex colors, etc.
  };

  return (
    <div className={merriweather.className}>
      {/* Form for colors */}
      <form
        onSubmit={handleSubmit}
        className="mb-4 flex space-x-4 w-full flex-col space-y-4 items-center"
      >
        <div className="w-full flex justify-center space-x-4">
          {colors.map((color, index) => (
            <div key={index} className="mb-2">
              <label>
                Color {index + 1}:
                <input
                  type="color"
                  value={color}
                  onChange={(e) => handleInputChange(index, e)}
                  className="ml-2"
                />
              </label>
            </div>
          ))}
        </div>
        <div>
          <label
            htmlFor="palette"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Palette
          </label>
          <input
            type="text"
            value={palette}
            onChange={(e) => setPalette(e.target.value)}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="volume"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Volume
          </label>
          <input
            type="text"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="backgroundImage"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Background Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </form>
      <ColorDisplay
        colors={colors}
        palette={palette}
        volume={volume}
        backgroundImage={backgroundImage}
      />
    </div>
  );
}

function ColorDisplay({ colors, palette, volume, backgroundImage }) {
  const ref = useRef(null);

  const downloadImage = () => {
    html2canvas(ref.current).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'colors.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  };

  const bgImageUrl = '/input-2.png'; // Replace with your image URL

  return (
    <>
      <div
        className="p-4 border rounded-sm mx-auto mt-10 w-[500px]  text-xs bg-white"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
        }}
        ref={ref}
      >
        <div className="py-40">
          <div className="flex justify-between pb-2 text-black pt-4 uppercase">
            <span>{palette}</span>
            <span>{volume}</span>
          </div>
          <div className="flex flex-col space-y-2">
            {colors.map((color, index) => (
              <div key={index} className="relative">
                <div
                  className="h-20 bg-gray-200"
                  style={{ backgroundColor: color }}
                >
                  {/* Color label positioned at bottom right inside the shape */}
                  <span className="absolute bottom-2 right-1 text-white font-light">
                    {color}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center w-full pt-6 text-sm text-gray-300">ZUMROD</p>
      </div>

      <div className="w-full flex justify-center pt-4">
        <button
          onClick={downloadImage}
          className="px-4 py-2 bg-gray-300 text-gray-800 text-xs rounded "
        >
          Download
        </button>
      </div>
    </>
  );
}
