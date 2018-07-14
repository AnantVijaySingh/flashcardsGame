import {GET_ALL_DECKS, GET_DECK, ADD_DECK} from "../actions/deck";

function deck(state={}, action) {
    switch (action.type) {
        case GET_ALL_DECKS:
            return {
                ...action.decks
            };
        default:
            return state
    }
}


export default deck;