import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/pokelist.scss";
const PokeList = (props) => {
  const items = props.pokemons.map((pokemon) => (
    <li key={pokemon.id} className="container-item">
      <Pokemon pokemon={pokemon} />
    </li>
  ));
  return <ul className="container-items">{items}</ul>;
};

export default PokeList;
