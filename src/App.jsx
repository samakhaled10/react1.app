


import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

// Define the basename
const basename = '/react1.app'; // Use your repository name here

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
], { basename });

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
