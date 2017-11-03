import { FilmCardI, FilmListAction } from 'types';

export const SHOW_FILMS_BOARD = 'SHOW_FILMS_BOARD';
export const RESET_FILMS_LIST = 'RESET_FILMS_LIST';
export const SORT_FILMS_BY = 'SORT_FILMS_BY';

export const showFilmsBoard = (films: FilmCardI[]): FilmListAction => {
    return {
        type: SHOW_FILMS_BOARD,
        films,
    }
}

export const resetFilmsList = (): FilmListAction => {
    return {
        type: RESET_FILMS_LIST,
    }
}

export const sortFilmsBy = (sortBy: string): FilmListAction => {
    return {
        type: SORT_FILMS_BY,
        sortBy,
    }
}
