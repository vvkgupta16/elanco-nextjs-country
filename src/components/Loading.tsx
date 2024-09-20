import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <svg
          className="w-16 h-16 text-blue-600 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6h2zm8 8a8 8 0 01-8-8h2a6 6 0 006 6v2zm8-8a8 8 0 01-8 8v-2a6 6 0 006-6h2zm-8-8a8 8 0 018 8h-2a6 6 0 00-6-6V4z"
          ></path>
        </svg>
        <p className="mt-4 text-xl">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
