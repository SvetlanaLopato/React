import * as actions from 'actions';

import { SearchAction, SearchState } from 'types';

const search = (state: SearchState = {}, action: SearchAction): SearchState => {
    switch (action.type) {
        case actions.SET_SEARCH_OPTION:
            return { ...state, searchBy: action.searchBy, needSearch: action.needSearch };
        case actions.SET_SEARCH_QUERY:
            return { ...state, searchQuery: action.searchQuery, needSearch: action.needSearch }
        case actions.SET_INPUT_VALUE:
            return { ...state, inputValue: action.inputValue || '' }
        default:
            return state;
    }
}

export default search;
