export const GET_ALL_DECKS = 'GET_ALL_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const GET_DECK = 'GET_DECK';

export function getAllDecks(decks) {
    return {
        type: GET_ALL_DECKS,
        decks
    }
}
