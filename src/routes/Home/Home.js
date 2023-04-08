import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-div d-flex justify-content-center">
      <h2>Welcom to Pokemon Api</h2>
      <Link to="/pokemons"> Go To Pokemons</Link>
    </div>
  );
}
