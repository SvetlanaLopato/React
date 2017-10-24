export const SET_SEARCH_OPTION = 'SET_SEARCH_OPTION';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';

export const setSearchOption = (searchBy, needSearch: boolean = true) => {
    return {
        type: SET_SEARCH_OPTION,
        searchBy,
        needSearch,
    }
}

export const setSearchQuery = (searchQuery, needSearch: boolean) => {
    return {
        type: SET_SEARCH_QUERY,
        searchQuery,
        needSearch,
    }
}

export const setInputValue = inputValue => {
    return {
        type: SET_INPUT_VALUE,
        inputValue,
    }
}
