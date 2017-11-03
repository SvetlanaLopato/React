import * as actions from 'actions';

import { FilmListAction, FilmCardI } from 'types';

const filmsList = (filmsList: FilmCardI[] = [], action: FilmListAction): FilmCardI[] => {
    let sortedFilmsList;

    switch (action.type) {
        case actions.SHOW_FILMS_BOARD:
            sortedFilmsList = sortFilmsList(action.films, 'release date');
            return [ ...sortedFilmsList ];
        case actions.RESET_FILMS_LIST:
            return [];
        case actions.SORT_FILMS_BY:
            sortedFilmsList = sortFilmsList(filmsList, action.sortBy);
            return [ ...sortedFilmsList ];
        default:
            return filmsList;
    }
}

export default filmsList;

function sortFilmsList(films: FilmCardI[], sortBy: string): FilmCardI[] {
    return sortBy === 'rating'
        ? films.sort(sortByRating).reverse()
        : films.sort(sortByReleaseDate).reverse();
}

function sortByReleaseDate(film1: FilmCardI, film2: FilmCardI): number {
    const releaseDate1: any = new Date(film1.release_date);
    const releaseDate2: any = new Date(film2.release_date);

    return releaseDate1 - releaseDate2;
}

function sortByRating(film1: FilmCardI, film2: FilmCardI): number {
    const rating1: number = film1.vote_average;
    const rating2: number = film2.vote_average;

    return rating1 - rating2;
}
