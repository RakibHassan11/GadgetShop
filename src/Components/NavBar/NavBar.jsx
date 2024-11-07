import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaCartArrowDown, FaHeart } from 'react-icons/fa';
import { useCartContext } from '../CartContext/CartContext';  // Import CartContext
import { useWishlistContext } from '../WishlistContext/WishlistContext';

const NavBar = () => {
  const { cartItems } = useCartContext();  // Access cartItems from context
  const {wishlistItems} = useWishlistContext();
  const location = useLocation(); // Get the current location (path)

  // Define the links for the navbar
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
      <li>
        <NavLink
          to="/unique"
          className={({ isActive }) =>
            isActive ? 'text-secondary font-bold underline' : 'hover:text-secondary'
          }
        >
          Opinion
        </NavLink>
      </li>
    </>
  );

  // Determine which background color to apply based on the current route
  const isHomePage = location.pathname === '/';
  const isDashboardPage = location.pathname === '/dashboard';

  // Dynamic background and text color for navbar
  const navbarBgColor = isHomePage ? 'bg-purple-600' : 'bg-base-100';
  const navbarTextColor = isHomePage ? 'text-white' : 'text-base-content'; // White text on purple background for Home page

  // Get the cart item count
  const cartItemCount = cartItems.length;

   // Get the wishlist item count
   const wishlistItemCount = wishlistItems.length;

  return (
    <div className={`rounded-t-2xl mt-4 navbar ${navbarBgColor}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="{btn btn-ghost lg:hidden ${navbarTextColor}}">
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
        <NavLink to="/" className={`btn btn-ghost normal-case text-2xl font-bold tracking-wide ${navbarTextColor}`}>
          GadgetHeaven
        </NavLink>
      </div>

      <div className="navbar-center  lg:flex">
        <ul className={`menu menu-horizontal px-1 space-x-4 ${navbarTextColor}`}>{links}</ul>
      </div>

      <div className="navbar-end">
        <NavLink to="/dashboard" className={`btn btn-ghost btn-circle ${navbarTextColor}`}>
          {/* Cart Icon with badge */}
          <div className="relative">
            <FaCartArrowDown className="text-2xl" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-3 text-xs font-semibold text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </div>
        </NavLink>
        <NavLink to="/dashboard" className={`btn btn-ghost btn-circle ${navbarTextColor}`}>
        <div className="relative">
        <FaHeart className="text-2xl" />
          {wishlistItemCount > 0 && (
              <span className="absolute -top-2 -right-3  text-xs font-semibold text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
                {wishlistItemCount}
              </span>
            )}
        </div>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
