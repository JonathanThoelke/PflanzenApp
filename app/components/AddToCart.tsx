/*

"use client";

import { useCart } from "../context/CartContext";
import React from "react";
import { Plant as PlantType } from "../interfaces";

interface AddToCartProps {
  plant: PlantType;
}

const AddToCart: React.FC<AddToCartProps> = ({ plant }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", plant });
    console.log(`${plant.deutscherName} wurde zum Warenkorb hinzugefügt`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-customGreen hover:bg-customGreen-hover text-white font-bold py-2 px-4 rounded"
    >
      in den Warenkorb
    </button>
  );
};

export default AddToCart;


*/

/*
"use client";

import { useCart } from "../context/CartContext";
import React from "react";
import { Plant as PlantType } from "../interfaces";

interface AddToCartProps {
  plant: PlantType;
}

const AddToCart: React.FC<AddToCartProps> = ({ plant }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", plant });
    console.log(`${plant.deutscherName} wurde zum Warenkorb hinzugefügt`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-customGreen hover:bg-customGreen-hover text-white font-bold py-2 px-4 rounded"
    >
      in den Warenkorb
    </button>
  );
};

export default AddToCart;
*/

'use client';

import { useCart } from "../context/CartContext";
import React from "react";
import { Plant as PlantType } from "../interfaces";

interface AddToCartProps {
  plant: PlantType;
}

const AddToCart: React.FC<AddToCartProps> = ({ plant }) => {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault(); // Prevent default to avoid unwanted side effects
    dispatch({ type: "ADD_TO_CART", plant });
    console.log(`${plant.deutscherName} wurde zum Warenkorb hinzugefügt`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-customGreen hover:bg-customGreen-hover text-white font-bold py-2 px-4 rounded"
    >
      in den Warenkorb
    </button>
  );
};

export default AddToCart;

