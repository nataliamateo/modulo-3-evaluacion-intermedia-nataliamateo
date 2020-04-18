import React from "react";
import "../stylesheets/App.scss";
import PokeList from "./PokeList";
import pokemons from "../pokemons.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    // para leer los datos del estado, solo leerlos, tambien se hace con hooks
    /* si fuera con hooks seria const pokedata 
    [pokemon, setPokemons] = useState (aqui los datos iniciales,pokedata)
    y en el this.state solo iria pokedata porque es funcion*/
    this.state = { pokemons };
  }

  render() {
    return (
      <div className="App">
        <PokeList pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
