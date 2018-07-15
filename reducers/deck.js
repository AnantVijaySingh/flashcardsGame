import {GET_ALL_DECKS, NEW_DECK, GET_DECK} from "../actions/deck";

function deck(state={}, action) {
    switch (action.type) {
        case GET_ALL_DECKS:
            return {
                ...action.decks
            };
        case NEW_DECK:
            return {
                ...state,
                [action.title]: {
                    title: action.title,
                    questions: []
                }
            };
        default:
            return state
    }
}

export default deck;