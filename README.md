# GadgetHeaven - E-Commerce Website

Welcome to **GadgetHeaven**, an e-commerce platform where you can browse the latest gadgets, add them to your cart, and manage your wishlist. The website is built using React, and the project leverages React Router, Context API, and custom hooks for state management.

## Live Website Link

You can check out the live website here:  
[Live Website Link]()

## Requirement Document Link

[GitRepository](https://github.com/RakibHassan11/Dream-XI.git)

## React Fundamental Concepts Used

This project demonstrates various React fundamentals, including:
1. **JSX**: Used for rendering HTML elements within JavaScript.
2. **Components**: The app is broken down into reusable components.
3. **Props**: Data is passed to child components using props.
4. **State**: Local component state management using `useState`.
5. **Hooks**:
   - `useState`: For managing state within functional components.
   - `useEffect`: For performing side-effects like fetching data.
   - `useContext`: To access shared state via Context API.
6. **React Router**: To handle routing and navigation between pages.
7. **Conditional Rendering**: Displaying components conditionally based on user actions or state (e.g., showing an empty cart message).
8. **Event Handling**: Handling user actions like button clicks and form submissions.
9. **Lists and Keys**: Rendering lists dynamically and handling keys for list elements.

## Data Handling and Management

For managing the state and data of the application, we use:

1. **Context API**:
   - The app uses **Context API** to manage the global state for the shopping cart and wishlist. This allows components to access the data without having to pass props manually through the component tree.
   - We have two main contexts: `CartContext` and `WishlistContext`.
   

## Features of the Website

Here are 5 key features of **GadgetHeaven**:

1. **Product Browsing**: 
   - Users can browse through a variety of gadgets, each with detailed descriptions, prices, ratings, and specifications.

2. **Add to Cart**: 
   - Users can add products to their shopping cart. The cart icon in the navbar displays the number of items in the cart with a badge.
   
3. **Add to Wishlist**:
   - Users can add products to their wishlist. The wishlist icon in the navbar also displays the number of items in the wishlist.

4. **Product Details**: 
   - Clicking on a product shows its detailed description, including price, rating, and specifications.

5. **Dynamic Navbar**:
   - The navbar dynamically updates based on the route, displaying active links with special styles for the current page.


