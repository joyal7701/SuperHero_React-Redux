import { combineReducers } from "redux";
import characters_json from "../data/characters.json";
import { ADD_CHARCTER } from "../actions";
function characters(state = characters_json, action) {
  switch (action.type) {
    case ADD_CHARCTER:
      let characters = state.filter((item) => item.id !== action.id);
      return characters;
    default:
      return state;
  }
}
function heroes(state = [], action) {
  switch (action.type) {
    case ADD_CHARCTER:
      let heroes = [...state, createCharacter(action.id)];
      return heroes;
    default:
      return state;
  }
}
function createCharacter(id) {
  let character = characters_json.find((c) => c.id === id);
  return character;
}
const rootReducer = combineReducers({ characters, heroes });
export default rootReducer;
