export const UPDATE_FILM_PROFILE = 'UPDATE_FILM_PROFILE';

export const updateFilmProfile = filmInfo => {
    return {
        type: UPDATE_FILM_PROFILE,
        filmInfo,
    };
};
