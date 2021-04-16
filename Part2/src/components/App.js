import React, { Component } from "react";
import CharacterList from "./CharacterList";
import HeroesList from "./HeroesList";
import SquadStats from "./SquadStats";
import "../styles/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>SuperSquad</h2>

        <CharacterList />

        <HeroesList />
        <SquadStats />
      </div>
    );
  }
}

export default App;
