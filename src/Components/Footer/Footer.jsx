import React from 'react';

export default function Footer() {
  return (
    <footer className="text-white bg-cyan-900">
      <div className="mx-auto w-full max-w-screen-xl p-9">
        <div className="grid grid-cols-2 gap-10 px-4 py-6 lg:py-8 md:grid-cols-3 text-center">
          <div>
            <h3 className="font-semibold text-3xl">LOCATION</h3>
            <div className="pt-2">
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">AROUND THE WEB</h3>
            <div className="flex gap-2 mt-4 justify-center">
              <i className="fa-brands fa-facebook p-2 border border-white rounded-full text-white"></i>
              <i className="fa-brands fa-twitter p-2 border border-white rounded-full text-white"></i>
              <i className="fa-brands fa-linkedin p-2 border border-white rounded-full text-white"></i>
              <i className="fa-solid fa-globe p-2 border border-white rounded-full text-white"></i>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">ABOUT FREELANCER</h3>
            <p className="pt-5">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
      <div className="text-center bg-cyan-950 text-white py-4 mt-auto">
       <p>&copy;Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}



