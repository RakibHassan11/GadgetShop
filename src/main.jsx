import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Root from './Components/Root/Root';
import { CartProvider } from './Components/CartContext/CartContext';
import { WishlistProvider } from './Components/WishlistContext/WishlistContext';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import DashBoard from './Components/DashBoard/DashBoard';
import ProductDetails from './Components/ProductDetails/ProductDetails';

// Define the routes for the application
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'errorpage',
        element: <ErrorPage />,
      },
      {
        path: 'dashboard',
        element: <DashBoard />,
      },
      {
        path: 'product/:productId',
        element: <ProductDetails />,
      },
    ],
  },
]);

// Render the app with Context Providers
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <WishlistProvider>
        <RouterProvider router={router} />
      </WishlistProvider>
    </CartProvider>
  </StrictMode>
);
