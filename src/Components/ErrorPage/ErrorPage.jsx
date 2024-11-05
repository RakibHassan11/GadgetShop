import React from 'react';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-52 ">
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="mb-4">Oops! The page you’re looking for doesn’t exist.</p>
    </div>
    );
};

export default ErrorPage;