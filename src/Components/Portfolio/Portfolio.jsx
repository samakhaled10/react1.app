import React, { useState } from 'react';
import port1 from '../../assets/images/poert1.png';
import port2 from '../../assets/images/port2.png';
import port3 from '../../assets/images/port3.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-cyan-950 mb-4">PORTFOLIO COMPONENT</h1>
      <div className="flex items-center mb-8">
        <div className="line bg-cyan-950 w-20 h-1"></div>
        <i className="fa-solid fa-star mx-2 text-cyan-950"></i>
        <div className="line bg-cyan-950 w-20 h-1"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[port1, port2, port3, port1, port2, port3].map((image, index) => (
          <div
            key={index}
            onClick={() => openModal(image)}
            className="relative cursor-pointer group"
          >
            <img
              className="h-64 w-auto rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
              src={image}
              alt={`Portfolio ${index + 1}`}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-emerald-700 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <i className="fa-solid fa-plus  text-slate-50 text-9xl"></i>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-green-800 bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="bg-white p-4 rounded-lg">
            <img className="max-h-screen max-w-full rounded-lg" src={selectedImage} alt="Selected" />
            
          </div>
        </div>
      )}
    </div>
  );
}
