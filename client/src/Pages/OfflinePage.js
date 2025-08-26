// OfflinePage.js
import React from "react";

const OfflinePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="text-center p-6 bg-red-500 rounded-lg shadow-lg max-w-xs mx-auto">
        <h1 className="text-3xl font-bold mb-4">You're Offline!</h1>
        <p className="text-lg mb-4">It seems like you're not connected to the internet.</p>
        <p className="text-sm">Please check your connection and try again.</p>
      </div>
    </div>
  );
};

export default OfflinePage;
