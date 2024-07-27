'use client';

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Plant as PlantType } from "../interfaces";

interface AddToCartProps {
  plant: PlantType;
}

const AddToCart: React.FC<AddToCartProps> = ({ plant }) => {
  const { dispatch } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch({ type: "ADD_TO_CART", plant });
    console.log(`${plant.deutscherName} wurde zum Warenkorb hinzugefügt`);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <>
      <button
        onClick={handleAddToCart}
        className="bg-customGreen hover:bg-customGreen-hover text-white font-bold py-2 px-4 rounded"
      >
        in den Warenkorb
      </button>
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-gray-100 p-3 rounded shadow-md" style={{ backgroundColor: "#D7B9D5" }}>
            <p className="text-lg font-bold text-white">{plant.deutscherName} wurde zum Warenkorb hinzugefügt!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AddToCart;
