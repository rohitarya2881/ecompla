import React, { createContext } from "react";
import allproducts from "../Components/Assets/allObject/allproducts";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const contextValue = { allProducts: allproducts };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
