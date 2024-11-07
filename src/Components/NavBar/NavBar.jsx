import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCartArrowDown, FaHeart } from "react-icons/fa";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-secondary font-bold underline' : 'hover:text-secondary'
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/errorpage"
          className={({ isActive }) =>
            isActive ? 'text-secondary font-bold underline' : 'hover:text-secondary'
          }
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? 'text-secondary font-bold underline' : 'hover:text-secondary'
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost normal-case text-2xl font-bold tracking-wide">
          GadgetHeaven
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{links}</ul>
      </div>

      <div className="navbar-end">
        <NavLink to="/cart" className="btn btn-ghost btn-circle">
          <FaCartArrowDown className='text-2xl' />
        </NavLink>
        <NavLink to="/favorites" className="btn btn-ghost btn-circle">
          <FaHeart className='text-2xl' />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
