export const ADD_CHARCTER = "ADD_CHARCTER";
export function addCharacterById(id) {
  const action = { type: ADD_CHARCTER, id };
  return action;
}
