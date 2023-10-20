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

const TypeColorContext = createContext();

export const TypeColorProvider = ({ children }) => {
  const typeColors = {
    bug: "#91c12c",
    dark: "#5a5467",
    dragon: "#0c6cc4",
    electric: "#f4d43b",
    fairy: "#ed91e3",
    fighting: "#ce4267",
    fire: "#ff9d54",
    flying: "#90a9dc",
    ghost: "#526aad",
    grass: "#63bc5a",
    ground: "#d97846",
    ice: "#73d0bd",
    normal: "#909ca2",
    poison: "#a96ac9",
    psychic: "#fb717b",
    rock: "#c6b88a",
    steel: "#5a8fa3",
    water: "#4e92d2",
  };

  const getBackgroundForType = (types) => {
    const colors = types.map((t) => typeColors[t.type.name] || "grey");

    if (colors.length === 1) return colors[0];
    return `linear-gradient(to bottom right, ${colors.join(", ")})`;
  };

  return (
    <TypeColorContext.Provider value={getBackgroundForType}>
      {children}
    </TypeColorContext.Provider>
  );
};

export const useTypeColour = () => useContext(TypeColorContext);
