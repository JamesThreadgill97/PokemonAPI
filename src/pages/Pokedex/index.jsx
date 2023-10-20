import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Pokedex.css";
import { usePokedex, useTypeColour } from "../../Contexts";

const Pokedex = () => {
  const { offset, limit } = usePokedex();
  const getBackgroundForType = useTypeColour();
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemon = async () => {
      const { results } = await (
        await fetch(
          `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
        )
      ).json();

      const detailedData = await Promise.all(
        results.map((pokemon) => fetch(pokemon.url).then((res) => res.json()))
      );

      setPokemonData(detailedData);
      setLoading(false);
    };

    getPokemon();
  }, [offset, limit]);

  return loading ? (
    <div className="loading-pokeball"></div>
  ) : (
    <section className="pokemon-grid">
      {pokemonData.map((el) => (
        <Link
          to={`/pokedex/${el.name}`}
          key={el.name}
          className="pokemon-card"
          style={{ background: getBackgroundForType(el.types) }}
        >
          <img src={el.sprites.front_default} alt={el.name} />
          <p className="pokemon-name">
            {el.name.charAt(0).toUpperCase() + el.name.slice(1)}
          </p>
        </Link>
      ))}
    </section>
  );
};

export default Pokedex;
