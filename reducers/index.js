import {combineReducers} from 'redux';
import deck from './deck';
import card from './card';

export default combineReducers({
    deck,
    card
})