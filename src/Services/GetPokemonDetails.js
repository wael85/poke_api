import axios from "axios";

export default async function GetPokemonDetails(pokemonName) {
  const res = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  if (res.status === 200) {
    const pokemon = await res.data;
    console.log(pokemon);
    return pokemon;
  } else {
    return null;
  }
}
