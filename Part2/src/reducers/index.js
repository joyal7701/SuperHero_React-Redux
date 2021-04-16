import { combineReducers } from "redux";
import characters_json from "../data/characters.json";
import { ADD_CHARACTER, REMOVE_CHARACTER } from "../actions";
function characters(state = characters_json, action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let characters = state.filter((item) => item.id !== action.id);
      return characters;
    case REMOVE_CHARACTER: //remove from heroes list and add back to character list
      characters = [...state, createCharacter(action.id)];
      return characters;
    default:
      return state;
  }
}

function heroes(state = [], action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let heroes = [...state, createCharacter(action.id)];
      return heroes;
    case REMOVE_CHARACTER:
      heroes = state.filter((item) => item.id !== action.id);
      return heroes;
    default:
      return state;
  }
}

export function createCharacter(id) {
  let character = characters_json.find((c) => c.id === id);
  return character;
}
const rootReducer = combineReducers({
  characters,
  heroes,
});

export default rootReducer;
