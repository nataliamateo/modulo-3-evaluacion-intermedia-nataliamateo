import React from "react";
import "../stylesheets/pokemon.scss";
import PropTypes from "prop-types";

const Pokemon = (props) => {
  const types = props.pokemon.types.map((type, index) => {
    return (
      <li className="container__list--pokemon" key={index}>
        {type}
      </li>
    );
  });
  return (
    <div className="container">
      <img src={props.pokemon.url} alt={props.pokemon.name} />
      <h4 className="container__title">{props.pokemon.name}</h4>
      <ul className="container__list">{types}</ul>
    </div>
  );
};

Pokemon.propTypes = {
  name: PropTypes.string,
  types: PropTypes.string,
};

export default Pokemon;
