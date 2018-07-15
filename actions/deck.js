export const GET_ALL_DECKS = 'GET_ALL_DECKS';
export const NEW_DECK = 'NEW_DECK';
export const GET_DECK = 'GET_DECK';

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