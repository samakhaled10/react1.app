import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-cyan-950 text-white fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between p-6 mx-auto max-w-screen-xl">
        <div className="flex items-center gap-2 text-3xl font-bold">
          <Link to="/home" className="hover: transition-transform duration-300">
            START FRAMEWORK
          </Link>
        </div>
        <div>
          <ul className="flex items-center gap-5 text-xl font-bold">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  ` ${isActive ? 'font-bold border-8 border-green-500 bg-green-500 rounded-lg' : ''}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  ` ${isActive ? 'font-bold border-8 border-green-500 bg-green-500 rounded-lg' : ''}`
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  ` ${isActive ? 'font-bold border-8 border-green-500 bg-green-500 rounded-lg' : ''}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
