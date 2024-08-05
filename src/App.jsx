

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

const router = createBrowserRouter([
  { path: '', element: <Layout />, children: [
    { path: 'home', element: <Home /> },
    { path: 'about', element: <About /> },
    { path: 'portfolio', element: <Portfolio /> },
    { path: 'contact', element: <Contact /> },
  ]}
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
