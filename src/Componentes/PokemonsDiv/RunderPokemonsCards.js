import React from "react";
import Pokemon from "../PocemonCard/Card";
import "./RunderPokemonsCards.css";

export default function Pokemons({ pokemons }) {
  if (!pokemons) {
    return <p>Loding...</p>;
  } else {
    return (
      <div
        className="pokemons-container"
        style={{
          margin: "0",
          width: "80%",
          display: "inline-block",
        }}
      >
        <div
          className="pokemons"
          style={{ margin: "5", width: "100%", textAlign: "center" }}
        >
          {pokemons.map((p) => {
            return <Pokemon pokemon={p} key={p.id} />;
          })}
        </div>
      </div>
    );
  }
}
