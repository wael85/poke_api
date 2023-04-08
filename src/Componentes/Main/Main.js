import React, { useState, useEffect } from "react";
import "./Main.css";
import RunderPokemonsCards from "../PokemonsDiv/RunderPokemonsCards";
import { GetAllPokemons } from "../../Services/GetPokemons";
import Pagination from "../PaginationButton/PaginationButton";

export default function Main() {
  const [pagePokemons, setPokemons] = useState({});
  useEffect(() => {
    async function getData() {
      const obj = await GetAllPokemons(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
      );
      setPokemons(obj);
    }
    getData();
  }, []);

  return (
    <main>
      <Pagination
        side="left"
        name="Previous"
        pagePokemons={pagePokemons}
        setPagePokemons={setPokemons}
      />
      <RunderPokemonsCards pokemons={pagePokemons.pokemons} />
      <Pagination
        side="right"
        name="Next"
        pagePokemons={pagePokemons}
        setPagePokemons={setPokemons}
      />
    </main>
  );
}
