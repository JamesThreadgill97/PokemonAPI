import { NavLink, Outlet } from "react-router-dom";
import logo from "./assets/International_Pokémon_logo.svg.png";
import "./Nav.css";

function Nav() {
  return (
    <>
      <nav className="NavBar">
        <div className="dropdown">
          <button>Menu</button>
          <div className="dropdown-menu">
            <p>
              <NavLink to="/">Home</NavLink>
            </p>
            <p>
              <NavLink to="/pokedex/random">Random</NavLink>
            </p>
          </div>
        </div>
        <div className="pokemonLogoContainer">
          <NavLink to="/">
            <img className="pokemonLogo" src={logo} alt="Pokemon Logo" />
          </NavLink>
        </div>
        <div className="right"></div> 
      </nav>
      <Outlet />
    </>
  );
}
export default Nav;
