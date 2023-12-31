import { NavLink } from "react-router-dom";
import "../../App.css";
import { usePokedex } from "../../Contexts";

function Home() {
  const { setOffset, setLimit } = usePokedex();
  return (
    <div>
      <h1>Welcome to this Pokédex!</h1>
      <p>
        Chose the generation below and fetch the pokémon from that generation!
      </p>
      <NavLink
        className="pokedex-link"
        to="/pokedex"
        onClick={() => {
          setOffset(0);
          setLimit(1021);
        }}
      >
        All
      </NavLink>
      <NavLink
        className="pokedex-link"
        to="/pokedex"
        onClick={() => {
          setOffset(0);
          setLimit(151);
        }}
      >
        Gen I
      </NavLink>
      <NavLink
        className="pokedex-link"
        to="/pokedex"
        onClick={() => {
          setOffset(151);
          setLimit(100);
        }}
      >
        Gen III
      </NavLink>
      <NavLink
        className="pokedex-link"
        to="/pokedex"
        onClick={() => {
          setOffset(251);
          setLimit(136);
        }}
      >
        Gen III
      </NavLink>
      <NavLink
        className="pokedex-link"
        to="/pokedex"
        onClick={() => {
          setOffset(386);
          setLimit(107);
        }}
      >
        Gen IV
      </NavLink>
      <NavLink
        className="pokedex-link"
        to="/pokedex"
        onClick={() => {
          setOffset(493);
          setLimit(107);
        }}
      >
        Gen V
      </NavLink>
      <NavLink
        className="pokedex-link"
        to="/pokedex"
        onClick={() => {
          setOffset(649);
          setLimit(156);
        }}
      >
        Gen VI
      </NavLink>
      <NavLink
        className="pokedex-link"
        to="/pokedex"
        onClick={() => {
          setOffset(721);
          setLimit(88);
        }}
      >
        Gen VII
      </NavLink>
      <NavLink
        className="pokedex-link"
        to="/pokedex"
        onClick={() => {
          setOffset(809);
          setLimit(96);
        }}
      >
        Gen VIII
      </NavLink>
      <NavLink
        className="pokedex-link"
        to="/pokedex"
        onClick={() => {
          setOffset(905);
          setLimit(116);
        }}
      >
        Gen IX
      </NavLink>
    </div>
  );
}

export default Home;
