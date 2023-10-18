import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Pokedex.css";

const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPokemon() {
      const result = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=386"
      );
      const data = await result.json();

      const detailsPromises = data.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        return response.json();
      });

      const detailedData = await Promise.all(detailsPromises);
      setPokemonData(detailedData);
      setLoading(false);
    }

    getPokemon();
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function getBackgroundForType(types) {
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

    if (types.length === 1) {
      return typeColors[types[0].type.name] || "grey";
    } else if (types.length === 2) {
      const color1 = typeColors[types[0].type.name] || "grey";
      const color2 = typeColors[types[1].type.name] || "grey";
      return `linear-gradient(to bottom right, ${color1}, ${color2})`;
    }
    // Handle more than two types if needed (though Pokémon typically have 1 or 2 types)
    return "grey";
  }

  return (
    <>
      {loading ? (
        <div className="loading-pokeball"></div>
      ) : (
        <div className="pokemon-grid">
          {pokemonData.map((el) => (
            <div
              className="pokemon-card"
              style={{ background: getBackgroundForType(el.types) }}
              key={el.name}
            >
              <Link to={`/pokedex/${el.name}`}>
                <img src={el.sprites.front_default} alt={el.name} />
                <p className="pokemon-name">{capitalizeFirstLetter(el.name)}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Pokedex;
