export const SHOW_FILMS_BOARD = 'SHOW_FILMS_BOARD';
export const RESET_FILMS_LIST = 'RESET_FILMS_LIST';
export const SORT_FILMS_BY = 'SORT_FILMS_BY';

export const showFilmsBoard = films => {
    return {
        type: SHOW_FILMS_BOARD,
        films,
    }
}

export const resetFilmsList = () => {
    return {
        type: RESET_FILMS_LIST,
    }
}

export const sortFilmsBy = sortBy => {
    return {
        type: SORT_FILMS_BY,
        sortBy,
    }
}
