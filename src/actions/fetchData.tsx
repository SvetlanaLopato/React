import { updateFilmProfile, showFilmsBoard } from 'actions';

export const fetchFilmsByTitle = (filmTitle: string) => {
    return dispatch => {
        const url: string = getUrl('searchByTitle', { filmTitle });

        fetchData(url, dispatchData);

        function dispatchData(data) {
            dispatch(showFilmsBoard(data.results));
        }
    }
}

export const fetchFilmsByActor = (actor: string) => {
    return dispatch => {
        const url: string = getUrl('searchByActor', { actor });

        fetchData(url, dispatchData);

        function dispatchData(data) {
            const filmsByActor = getActorsFilms(data.results);
            const uniqueFilmsByActor = getUniqueItems(filmsByActor);

            dispatch(showFilmsBoard(uniqueFilmsByActor));
        }
    }
}

export const fetchFilmById = (filmId: string) => {
    return dispatch => {
        const url: string = getUrl('movieById', { filmId });

        fetchData(url, dispatchData);

        function dispatchData(data) {
            dispatch(updateFilmProfile(data));
        }
    }
}

export const fetchFilmByTitle = (filmTitle: string) => {
    return dispatch => {
        const url: string = getUrl('searchByTitle', { filmTitle });

        fetchData(url, dispatchData);

        function dispatchData(data) {
            const firstMatchedFilm = data.results[0];

            dispatch(updateFilmProfile(firstMatchedFilm));
        }
    }
}

export const fetchSimilarFilms = (filmId: string) => {
    return dispatch => {
        const url: string = getUrl('similarMovies', { filmId });

        fetchData(url, dispatchData);

        function dispatchData(data) {
            dispatch(showFilmsBoard(data.results));
        }
    }
}

function getActorsFilms(actors) {
    return actors.reduce((films, actor) => films.concat(actor.known_for), []);
}

function getUniqueItems(arr) {
    let uniqueArr = [];

    arr.forEach(element => {
        !uniqueArr.find(uniqueElement => uniqueElement.id === element.id) && uniqueArr.push(element);
    });

    return uniqueArr;
}

function fetchData(url: string, callback: (data) => void) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = () => {
        const data = JSON.parse(xhr.responseText);

        callback(data);
    }

    xhr.onerror = () => {
      alert('Ошибка ' + this.status);
    }

    xhr.send();
}

function getUrl(type: string, options) {
    const api_key: string = '72f487f6dcad6facef965420501d8275';
    let params: string = `?api_key=${api_key}`;
    let path: string = `https://api.themoviedb.org/3`;

    switch (type) {
        case 'movieById':
            path += `/movie/${options.filmId}`;
            break;
        case 'searchByTitle':
            path += '/search/movie';
            params += `&query=${options.filmTitle}`;
            break;
        case 'searchByActor':
            path += '/search/person';
            params += `&query=${options.actor}`;
            break;
        case 'similarMovies':
            path += `/movie/${options.filmId}/similar`;
            break;
    }

    return path.concat(params);
}
