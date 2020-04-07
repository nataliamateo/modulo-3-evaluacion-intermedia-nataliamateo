import React from "react";
import "../stylesheets/pokemon.scss";
const Pokemon = (props) => {
  const types = props.pokemon.types.map((type, index) => {
    return <li key={index}>{type}</li>;
  });
  return (
    <div className="container">
      <img src={props.pokemon.url} alt={props.pokemon.name}></img>
      <h4 className="container__title">{props.pokemon.name}</h4>
      <ul>{types}</ul>
    </div>
  );
};

export default Pokemon;
