'use client';
import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({ weight: '400', subsets: ['latin'] });

export default function Mounir() {
  // const colors = ['#FF5733', '#33FF57', '#5733FF', '#33FFF5'];
  const [colors, setColors] = useState(['', '', '', '']);

  const handleInputChange = (index, event) => {
    const newColors = [...colors];
    newColors[index] = event.target.value;
    setColors(newColors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // For this example, we simply prevent default and let the colors be set.
    // In a real-world app, you might want to validate the hex colors, etc.
  };

  return (
    <div className={merriweather.className}>
      {/* Form for colors */}
      <form onSubmit={handleSubmit} className="mb-4 flex space-x-4">
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
      </form>
      <ColorDisplay colors={colors} />
    </div>
  );
}

function ColorDisplay({ colors }) {
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
        className="p-4 border rounded-sm mx-auto mt-10 w-[250px] text-[6px]"
        style={{
          backgroundImage: `url(${bgImageUrl})`,
          backgroundSize: 'cover',
        }}
        ref={ref}
      >
        <div className="py-12">
          <div className="flex justify-between pb-1 text-black">
            <span>PALETTE 3</span>
            <span>VOLUME 5</span>
          </div>
          <div className="flex flex-col space-y-2">
            {colors.map((color, index) => (
              <div key={index} className="relative">
                <div
                  className="h-14 bg-gray-200"
                  style={{ backgroundColor: color }}
                >
                  {/* Color label positioned at bottom right inside the shape */}
                  <span className="absolute bottom-0 right-0 text-white font-light">
                    {color}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center w-full pt-6 text-[10px]">ZUMROD</p>
      </div>

      <button
        onClick={downloadImage}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Download as PNG
      </button>
    </>
  );
}
