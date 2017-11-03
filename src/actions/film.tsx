import { FilmInfo, FilmAction } from 'types';

export const UPDATE_FILM_PROFILE = 'UPDATE_FILM_PROFILE';

export const updateFilmProfile = (filmInfo: FilmInfo): FilmAction => {
    return {
        type: UPDATE_FILM_PROFILE,
        filmInfo,
    };
};
