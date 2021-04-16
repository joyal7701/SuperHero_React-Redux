import React, { Component } from "react";
import { connect } from "react-redux";
import { removeCharacterById } from "../actions/index";
import "../styles/index.css";

class HeroesList extends Component {
  render() {
    console.log("heroes", this.props);
    return (
      <React.Fragment>
        <h4>Your Hero Squad</h4>
        <ul className="list-group">
          {this.props.heroes.map((hero) => {
            return (
              <li key={hero.id} className="list-group-item">
                <div className="list-item">{hero.name}</div>
                <div
                  className="list-item right-button"
                  onClick={() => this.props.removeCharacterById(hero.id)}
                >
                  x
                </div>
                <div className="list-item stats">
                  Strength:{hero.strength}|Speed:{hero.speed}|intelligence:
                  {hero.intelligence}
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
  return (state = {
    heroes: state.heroes,
  });
}

export default connect(mapStateToProps, { removeCharacterById })(HeroesList);
