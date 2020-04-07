import React from "react";
import "../stylesheets/App.scss";
import PokeList from "./PokeList";
import pokemons from "../pokemons.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = pokemons;
  }

  render() {
    return (
      <div className="App">
        <PokeList pokemons={this.state} />
      </div>
    );
  }
}

export default App;
