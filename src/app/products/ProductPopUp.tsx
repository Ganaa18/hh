import React from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageURL: string; 
}

interface ProductPopupProps {
  product: Product;
  onClose: () => void;
}

const ProductPopup: React.FC<ProductPopupProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-70 z-40" onClick={onClose}></div>
      <div className="pointer-events-none absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <button onClick={onClose} type="button" className="relative left-[95%] mb-[4px] bg-white rounded-md p-1 flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          <img
            className="rounded-md max-h-96 w-full object-cover"
            src={product.imageURL || ''} 
            alt={product.name}
          />
          <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
          <p className="text-lg">{product.description}</p>
          <p className="text-xl mt-4">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
