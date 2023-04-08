import axios from "axios";

export const GetAllPokemons = async (url) => {
  let pagePokemons = {};
  const names = await axios
    .get(url)
    .then((res) => res.data)
    .then((res) => {
      pagePokemons.next = res.next;
      pagePokemons.previous = res.previous;
      return res.results.map((p) => p.name);
    })
    .catch((er) => console.log(er));

  const promeses = names.map(async (element) => {
    return await axios
      .get("https://pokeapi.co/api/v2/pokemon/" + element)
      .then((res) => res.data);
  });
  const pokemons = await Promise.all(promeses);
  pagePokemons.pokemons = pokemons;
  return pagePokemons;
};
