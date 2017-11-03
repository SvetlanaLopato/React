import { SearchAction } from 'types';

export const SET_SEARCH_OPTION = 'SET_SEARCH_OPTION';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';

export const setSearchOption = (searchBy: string, needSearch: boolean = true): SearchAction => {
    return {
        type: SET_SEARCH_OPTION,
        searchBy,
        needSearch,
    }
}

export const setSearchQuery = (searchQuery: string, needSearch: boolean): SearchAction => {
    return {
        type: SET_SEARCH_QUERY,
        searchQuery,
        needSearch,
    }
}

export const setInputValue = (inputValue: string): SearchAction => {
    return {
        type: SET_INPUT_VALUE,
        inputValue,
    }
}
