import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/pokelist.scss";
const PokeList = (props) => {
  const items = props.pokemons.map((pokemon) => (
    <li className="container-item">
      <Pokemon key={props.id} pokemon={pokemon} />
    </li>
  ));
  return <ul className="container-items">{items}</ul>;
};

export default PokeList;
