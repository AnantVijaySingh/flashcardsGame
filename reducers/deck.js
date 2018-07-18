import {GET_ALL_DECKS, NEW_DECK, ADD_CARD} from "../actions/deck";

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
        case ADD_CARD:
            return {
                ...state,
                [action.deckTitle]: {
                    ...state[action.deckTitle],
                    questions: state[action.deckTitle].questions.concat({question: action.ques, answer: action.ans})
                }
            };
        default:
            return state
    }
}

export default deck;