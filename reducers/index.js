import {combineReducers} from 'redux';
import decks from './deck';
import card from './card';

export default combineReducers({
    decks,
    card
})