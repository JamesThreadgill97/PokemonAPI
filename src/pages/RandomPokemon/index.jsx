import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./RandomPokemon.css";

function RandomPokemon() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [num, setNum] = useState(0); 

  const randomNumberInRange = (min, max) => { 
      return Math.floor(Math.random()  
              * (max - min + 1)) + min; 
  }; 

  const generateRandom = async () => { 
    const randomNum = randomNumberInRange(1, 1021);
    setNum(randomNum);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}/`);
    const pokeData = await response.json();
    console.log(pokeData);
    setPokemon(pokeData);
  };

  const [pokemon, setPokemon] = useState({ sprites: {} });
  const officialArtwork =
    pokemon?.sprites?.other?.["official-artwork"]?.front_default;

  function playCry(url) {
    const audio = new Audio(url);
    audio.play();
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    generateRandom();
  }, []);

  return (
    <>
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
      <button onClick={() => generateRandom()}>Random Encounter!</button>
    </>
  );
}

export default RandomPokemon;
