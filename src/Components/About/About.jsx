import React from 'react';

export default function About() {
  return (
    <div className="bg-emerald-600 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-4">ABOUT COMPONENT</h1>
      <div className="flex items-center mb-4">
        <div className="line bg-white w-20 h-1"></div>
        <i className="fa-solid fa-star mx-2 text-white"></i>
        <div className="line bg-white w-20 h-1"></div>
      </div>
      <div className="flex gap-4 text-white text-center max-w-4xl">
        <p className="w-1/2">
          Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
        <p className="w-1/2">
          Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </div>
  );
}
