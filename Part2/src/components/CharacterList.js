import React, { Component } from "react";
import { connect } from "react-redux";
import { addCharacterById } from "../actions";

class CharacterList extends Component {
  render() {
    console.log("this.props", this.props);
    return (
      <React.Fragment>
        <h4>Characters</h4>
        <ul className="list-group">
          {this.props.characters.map((character) => {
            return (
              <li key={character.id} className="list-group-item">
                <div className="list-item">{character.name}</div>
                <div
                  className="list-item right-button"
                  onClick={() => this.props.addCharacterById(character.id)}
                >
                  +
                </div>
                <div className="list-item stats">
                  Strength:{character.strength}|Speed:{character.speed}
                  |intelligence:{character.intelligence}
                </div>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    characters: state.characters,
  };
}

export default connect(mapStateToProps, { addCharacterById })(CharacterList);
