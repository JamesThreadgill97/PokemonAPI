import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p>I am a homepage!</p>
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
