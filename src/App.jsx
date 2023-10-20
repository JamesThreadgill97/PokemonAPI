import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Pokemon, Pokedex, Home, RandomPokemon } from "./pages";
import Nav from "./Nav";
import { PokedexProvider, TypeColorProvider } from './Contexts/index'


function App() {
  return (
    <div className="App">
      <PokedexProvider>
        <TypeColorProvider>
          <Routes>
            <Route path="/" element={<Nav />}>
              <Route index element={<Home />} />
              <Route path="/pokedex">
                <Route index element={<Pokedex />} />
                <Route path="random" element={<RandomPokemon />} />
                <Route path=":name" element={<Pokemon />} />
              </Route>
              <Route path="*" element={<h1>Error 404: Page not found</h1>} />
            </Route>
          </Routes>
        </TypeColorProvider>
      </PokedexProvider>
    </div>
  );
}

export default App;
