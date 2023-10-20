// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Pokedex.css";
// import { usePokedex } from "../../Contexts";

// const Pokedex = () => {
//   const { offset, limit } = usePokedex();
//   const [pokemonData, setPokemonData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function getPokemon() {
//       const result = await fetch(
//         `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
//       );
//       const data = await result.json();

//       const detailsPromises = data.results.map(async (pokemon) => {
//         const response = await fetch(pokemon.url);
//         return response.json();
//       });

//       const detailedData = await Promise.all(detailsPromises);
//       setPokemonData(detailedData);
//       setLoading(false);
//     }

//     getPokemon();
//   }, []);

//   function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   function getBackgroundForType(types) {
//     const typeColors = {
//       bug: "#91c12c",
//       dark: "#5a5467",
//       dragon: "#0c6cc4",
//       electric: "#f4d43b",
//       fairy: "#ed91e3",
//       fighting: "#ce4267",
//       fire: "#ff9d54",
//       flying: "#90a9dc",
//       ghost: "#526aad",
//       grass: "#63bc5a",
//       ground: "#d97846",
//       ice: "#73d0bd",
//       normal: "#909ca2",
//       poison: "#a96ac9",
//       psychic: "#fb717b",
//       rock: "#c6b88a",
//       steel: "#5a8fa3",
//       water: "#4e92d2",
//     };

//     if (types.length === 1) {
//       return typeColors[types[0].type.name] || "grey";
//     } else if (types.length === 2) {
//       const color1 = typeColors[types[0].type.name] || "grey";
//       const color2 = typeColors[types[1].type.name] || "grey";
//       return `linear-gradient(to bottom right, ${color1}, ${color2})`;
//     } else if (types.length === 3) {
//       const color1 = typeColors[types[0].type.name] || "grey";
//       const color2 = typeColors[types[1].type.name] || "grey";
//       const color3 = typeColors[types[2].type.name] || "grey";
//       return `linear-gradient(to bottom right, ${color1}, ${color2}, ${color3})`;
//     }
//     return "grey";
//   }

//   return (
//     <>
//       {loading ? (
//         <div className="loading-pokeball"></div>
//       ) : (
//         <div className="pokemon-grid">
//           {pokemonData.map((el) => (
//             <div
//               className="pokemon-card"
//               style={{ background: getBackgroundForType(el.types) }}
//               key={el.name}
//             >
//               <Link to={`/pokedex/${el.name}`}>
//                 <img src={el.sprites.front_default} alt={el.name} />
//                 <p className="pokemon-name">{capitalizeFirstLetter(el.name)}</p>
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default Pokedex;
//   const getBackgroundForType = (types) => {
//     const typeColors = {
//       bug: "#91c12c",
//             dark: "#5a5467",
//             dragon: "#0c6cc4",
//             electric: "#f4d43b",
//             fairy: "#ed91e3",
//             fighting: "#ce4267",
//             fire: "#ff9d54",
//             flying: "#90a9dc",
//             ghost: "#526aad",
//             grass: "#63bc5a",
//             ground: "#d97846",
//             ice: "#73d0bd",
//             normal: "#909ca2",
//             poison: "#a96ac9",
//             psychic: "#fb717b",
//             rock: "#c6b88a",
//             steel: "#5a8fa3",
//             water: "#4e92d2",
//     };

//     const colors = types.map(t => typeColors[t.type.name] || "grey");

//     if (colors.length === 1) return colors[0];
//     return `linear-gradient(to bottom right, ${colors.join(', ')})`;
// };

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
