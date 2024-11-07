import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
  const location = useLocation(); // Get the current path

  useEffect(() => {
    let title;
    switch (location.pathname) {
      case '/':
        title = 'Home | GadgetHeaven';
        break;
      case '/dashboard':
        title = 'Dashboard | GadgetHeaven';
        break;
      case '/unique':
        title = 'Opinion | GadgetHeaven';
        break;
      case '/errorpage':
        title = 'Statistics | GadgetHeaven';
        break;
      default:
        title = 'GadgetHeaven'; // Default title if no path matches
        break;
    }
    document.title = title; // Update the document title dynamically
  }, [location]); // Run this effect whenever the location changes (i.e., route changes)

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <NavBar />
        <Outlet /> {/* This renders the child routes */}
        <Footer />
      </div>
    </>
  );
};

export default Root;
