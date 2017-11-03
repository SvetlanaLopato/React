import fetchService from 'fetchService';

import { updateFilmProfile, showFilmsBoard } from 'actions';
import { FetchOptions, FilmCardI } from 'types';

const { getUrl, fetchData } = fetchService();

export const fetchFilmsByTitle = (filmTitle: string) => {
    return async dispatch => {
        const { data } = await getData('searchByTitle', { filmTitle });

        dispatch(showFilmsBoard(data.results));
    }
}

export const fetchFilmsByActor = (actor: string) => {
    return async dispatch => {
        const { data } = await getData('searchByActor', { actor });
        const filmsByActor = getActorsFilms(data.results)

        dispatch(showFilmsBoard(filmsByActor));
    }
}

export const fetchFilmById = (filmId: number) => {
    return async dispatch => {
        const { data } = await getData('movieById', { filmId });

        dispatch(updateFilmProfile(data));
    }
}

export const fetchFilmByTitle = (filmTitle: string) => {
    return async dispatch => {
        const { data } = await getData('searchByTitle', { filmTitle });
        const firstMatchedFilm = data.results[0];

        dispatch(updateFilmProfile(firstMatchedFilm));
    }
}

export const fetchSimilarFilms = (filmId: string) => {
    return async dispatch => {
        const { data } = await getData('similarMovies', { filmId });

        dispatch(showFilmsBoard(data.results));
    }
}

function getData(searchType: string, options: FetchOptions) {
    const url: string = getUrl(searchType, options);

    return fetchData(url);
}

function getActorsFilms(actors: any): FilmCardI[] {
    const films: FilmCardI[] = actors.reduce((films, actor) => films.concat(actor.known_for), []);
    let itemsMap = {};

    return films.filter(film => {
        if (!itemsMap[film.id]) {
            itemsMap[film.id] = true;
            return true;
        }
    });
}
