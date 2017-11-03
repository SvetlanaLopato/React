import { combineReducers } from 'redux';

import film from 'reducers/film';
import search from 'reducers/search';
import filmsList from 'reducers/filmsList';

const appState = combineReducers({
    film,
    filmsList,
    search,
});

export default appState;
