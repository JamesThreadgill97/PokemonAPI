import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to this Pokédex!</h1>
            <p>Chose the generation below and fetch the pokémon from that generation!</p>
            <NavLink
            to="/pokedex"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Gen I to III
          </NavLink>
        </div>
    )
}

export default Home;
