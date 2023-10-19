import React, { useState, useContext, createContext } from "react";

const PokedexContext = createContext();

export const PokedexProvider = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);

  return (
    <PokedexContext.Provider value={{ offset, setOffset, limit, setLimit }}>
      {children}
    </PokedexContext.Provider>
  );
};

export const usePokedex = () => useContext(PokedexContext);
