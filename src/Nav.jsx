import { NavLink, Outlet } from "react-router-dom";
import logo from './assets/International_Pokémon_logo.svg.png';

function Nav() {
  let activeStyle = {
    textDecoration: "underline",
    backgroundColor: "White",
    color: "black",
  };
  return (
    <>
      <nav> <NavLink  to="/">
        <img className="pokemonLogo" src={logo} alt="Pokemon Logo"/>
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
export default Nav
