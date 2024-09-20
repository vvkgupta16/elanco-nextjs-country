import React from 'react';
import { FaRegSadCry } from 'react-icons/fa';

const NoDataScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
        <FaRegSadCry className="text-4xl text-gray-500 mb-4" />
        <p className="text-2xl font-semibold text-gray-700 mb-2">No Data Available</p>
        <p className="text-gray-500">
          It seems we couldn&#39;t find any data matching your criteria.
        </p>
        <button
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default NoDataScreen;
