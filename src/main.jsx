// src/index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Ensure this file exists to handle global styles
import Root from './Components/Root/Root'; // Your main Root component
import { CartProvider } from './Components/CartContext/CartContext'; // Import CartProvider
import { WishlistProvider } from './Components/WishlistContext/WishlistContext'; // Import WishlistProvider
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';  // Import RouterProvider and createBrowserRouter
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import DashBoard from './Components/DashBoard/DashBoard';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import UniquePage from './Components/UniquePage/UniquePage';

// Define the routes for the application
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />, // The root component
    errorElement: <ErrorPage />, // Custom error page component
    children: [
      {
        path: '/',
        element: <Home />, // Home page component
      },
      {
        path: 'errorpage', // Custom error path
        element: <ErrorPage />,
      },
      {
        path: 'dashboard', // Dashboard page component
        element: <DashBoard />,
      },
      {
        path: 'product/:productId', // Product details page
        element: <ProductDetails />,
      },
      {
        path:'unique',
        element:<UniquePage></UniquePage>,
      }
    ],
  },
]);

// Render the app with Context Providers
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap the app with CartProvider and WishlistProvider */}
    <CartProvider>
      <WishlistProvider>
        {/* Render the RouterProvider with the defined router */}
        <RouterProvider router={router} />
      </WishlistProvider>
    </CartProvider>
  </StrictMode>
);
