import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import GetPokemonDetails from "../../Services/GetPokemonDetails";
import "./PokemonDetails.css";

export default function PokemonDetails() {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    async function getData() {
      const obj = await GetPokemonDetails(pokemonName);
      setPokemon(obj);
    }
    getData();
  }, [pokemonName]);
  if (pokemon !== null) {
    return (
      <div className="pokemon-div d-flex justify-content-center">
        <div className="card mb-3" style={{ "max-width": "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              {Object.entries(pokemon.sprites).map(([k, v]) => {
                if (v && typeof v === "string") {
                  return (
                    <img
                      key={k}
                      src={v}
                      alt={v[0]}
                      className="img-fluid rounded-start"
                    />
                  );
                } else {
                  return "";
                }
              })}
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-uppercase">{pokemon.name}</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1 className="pokemon-div">Loding ...</h1>;
  }
}
