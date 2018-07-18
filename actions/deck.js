export const GET_ALL_DECKS = 'GET_ALL_DECKS';
export const NEW_DECK = 'NEW_DECK';
export const GET_DECK = 'GET_DECK';
export const ADD_CARD = 'ADD_CARD';

export function addCard ({deckTitle, ques, ans}) {
    return {
        type: ADD_CARD,
        deckTitle,
        ques,
        ans
    }
}

export function getAllDecks(decks) {
    return {
        type: GET_ALL_DECKS,
        decks
    }
}

export function newDeck(title) {
    return {
        type: NEW_DECK,
        title
    }
}