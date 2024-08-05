

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16"> {/* Add padding top to avoid overlap with fixed navbar */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
