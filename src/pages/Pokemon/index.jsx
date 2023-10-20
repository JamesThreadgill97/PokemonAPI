import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTypeColour } from "../../Contexts";
import "./Pokemon.css";
function Pokemon() {
  const { name } = useParams();
  const navigate = useNavigate();
  const getBackgroundForType = useTypeColour();

  useEffect(() => {
    fetchPokemon();
  }, []);
  const [pokemon, setPokemon] = useState({ sprites: {} });
  const officialArtwork =
    pokemon?.sprites?.other?.["official-artwork"]?.front_default;
  const bgColor =
    pokemon && pokemon.types ? getBackgroundForType(pokemon.types) : "grey";

  const fetchPokemon = async () => {
    console.log({ name });
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    const pokeData = await response.json();
    console.log(pokeData);
    setPokemon(pokeData);
  };
  function playCry(url) {
    const audio = new Audio(url);
    audio.play();
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div style={{ background: bgColor, minHeight: "100vh" }}>
      <h1>
        {pokemon.name ? capitalizeFirstLetter(pokemon.name) : "Loading..."}
      </h1>
      {officialArtwork && (
        <>
          <div className="sprite-container">
            <div className="normal-sprite">
              <h3>Normal</h3>
              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon.name}
                onClick={() =>
                  playCry(
                    `https://play.pokemonshowdown.com/audio/cries/${pokemon.name.toLowerCase()}.mp3`
                  )
                }
              />
            </div>
            <div className="shiny-sprite">
              <h3>Shiny</h3>
              <img
                src={pokemon.sprites.other["official-artwork"].front_shiny}
                alt={pokemon.name}
                onClick={() =>
                  playCry(
                    `https://play.pokemonshowdown.com/audio/cries/${pokemon.name.toLowerCase()}.mp3`
                  )
                }
              />
            </div>
          </div>
        </>
      )}
      <button onClick={() => navigate("/pokedex")}>Go back to Pokedex</button>
    </div>
  );
}

export default Pokemon;
