import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex items-center space-x-3">
        <div className="w-16 h-16 border-4 border-t-4 border-white rounded-full animate-spin"></div>
        <span className="text-white text-xl font-semibold">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
