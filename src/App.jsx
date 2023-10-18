import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Pokemon, Pokedex, Home } from "./pages";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/pokedex">
            <Route index element={<Pokedex />} />
            <Route path=":name" element={<Pokemon />} />
          </Route>
          <Route path="*" element={<h1>Error 404: Page not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
