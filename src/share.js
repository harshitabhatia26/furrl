import React from 'react';

const SharePopup = ({ productUrl, onClose }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(productUrl).then(() => {
      alert('Link copied!'); // Replace with a more user-friendly notification
    });
  };

  return (
    <div className="share-popup fixed text-xs top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
      <div className="flex flex-col share-popup-content w-72 bg-white p-2 rounded shadow-md">
        <p>Share this product:</p>
        <a href={productUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline break-words my-2">
          {productUrl}
        </a>
        <div className='flex items-center'>
        <button onClick={handleCopy} className="bg-blue-500 text-white py-1 px-2 rounded ">
          Copy Link
        </button>
        <button onClick={onClose} className="bg-grey-700 py-1 px-2 rounded mx-1 border">
          Close
        </button>
        </div>
      </div>
    </div>
  );
};

export default SharePopup;
