import React from "react";
import "../stylesheets/App.scss";
import PokeList from "./PokeList";
import pokemons from "../pokemons.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      //     // pokemons = [
      {
        id: "",
        name: "",
        types: [],
        evolution: "",
        url: "",
      };
    //   // ];
  }
  render() {
    return (
      <div className="App">
        <PokeList pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
