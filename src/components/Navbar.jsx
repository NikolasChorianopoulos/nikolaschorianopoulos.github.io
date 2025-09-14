import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex items-center justify-evenly space-x-10 sm:flex-row sm:justify-start">
        <li>
          <NavLink to="/" className="text-lg font-medium">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="text-lg font-medium">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="text-lg font-medium">
            Projects
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
