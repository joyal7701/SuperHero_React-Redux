export const ADD_CHARACTER = 'ADD_CHARACTER';
export function addCharacterById(id) {//action creator that returns an action
    const action = {
        type: ADD_CHARACTER,
        id
    }
    return action;
}

export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';
export function removeCharacterById(id) {
    const action = {
        type: REMOVE_CHARACTER,
        id
    }
    return action;
}