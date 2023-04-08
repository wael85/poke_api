import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Pokemons from "./routes/Pkemons";
import PokemonDetails from "./routes/PokemonDetails/PokemonDetails";
import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:pokemonName" element={<PokemonDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>404 page not Found</h1>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
