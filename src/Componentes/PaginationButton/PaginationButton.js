import React from "react";
import { GetAllPokemons } from "../../Services/GetPokemons";

export default function Pagination({
  side,
  name,
  pagePokemons,
  setPagePokemons,
}) {
  let obj;
  return (
    <button
      style={{
        display: "inline-block",
        position: "sticky",
        top: "50vh",
        width: "10%",
        float: side,
      }}
      onClick={async () => {
        obj = await GetAllPokemons(
          name === "Next" ? pagePokemons.next : pagePokemons.previous
        );
        setPagePokemons(obj);
      }}
    >
      {" "}
      {name}
    </button>
  );
}
