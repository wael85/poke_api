import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Card.css";

export default function Pokemon({ pokemon }) {
  const backGrounds = ["lightgreen", "lightblue", "lightcoral"];
  let backGround = "";
  switch (pokemon.types[0].type.name) {
    case "grass":
      backGround = backGrounds[0];
      break;
    case "water":
      backGround = backGrounds[1];
      break;
    default:
      backGround = backGrounds[2];
  }
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(`/pokemons/${pokemon.name}`);
  };

  return (
    <Card
      key={pokemon.id}
      style={{ width: "18rem", background: backGround, height: "300px" }}
      className="pokemon mb-2"
      onClick={routeChange}
    >
      <h6 id="test" className="Order">
        #{pokemon.order}
      </h6>
      <Card.Img
        style={{ height: "60%" }}
        variant="top"
        src={pokemon.sprites.front_default}
      />
      <Card.Body>
        <Card.Title
          style={{ fontWeight: "bold", fontSize: "2rem", color: "white" }}
        >
          {capitalizFirstLitter(pokemon.name)}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
const capitalizFirstLitter = (stringToEdit) => {
  let capitalLitter = stringToEdit[0].toUpperCase();
  let finalString = capitalLitter + stringToEdit.substring(1);
  return finalString;
};
