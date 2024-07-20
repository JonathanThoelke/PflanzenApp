'use client';

import React, { createContext, useContext, useReducer } from 'react';
import { Plant as PlantType } from "../interfaces";


interface CartItem extends PlantType {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

interface CartAction {
  type: 'ADD_TO_CART' | 'REMOVE_FROM_CART';
  plant: PlantType;
}

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = state.items.findIndex(item => item.ID === action.plant.ID);
      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 0.5;
        return { ...state, items: updatedItems };
      } else {
        return { ...state, items: [...state.items, { ...action.plant, quantity:1 }] };
      }
    }
    case 'REMOVE_FROM_CART': {
      const existingItemIndex = state.items.findIndex(item => item.ID === action.plant.ID);
      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        if (updatedItems[existingItemIndex].quantity > 1) {
          updatedItems[existingItemIndex].quantity -= 0.5;
        } else {
          updatedItems.splice(existingItemIndex, 1);
        }
        return { ...state, items: updatedItems };
      }
      return state;
    }
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

