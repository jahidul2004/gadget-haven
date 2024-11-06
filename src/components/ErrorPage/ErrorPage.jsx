import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-9xl font-extrabold text-red-500">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mt-4">Page is not found!!</p>
        <p className="text-gray-600 mt-2">
          Your desired page is not found.Please check the url.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
