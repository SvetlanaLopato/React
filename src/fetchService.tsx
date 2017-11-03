import axios from 'axios';

export default function fetchService() {
    return {
        fetchData,
        getUrl,
    };

    function fetchData(url: string, method: string = 'get') {
        return axios({ method, url });
    }

    function getUrl(type: string, options) {
        const api_key: string = '72f487f6dcad6facef965420501d8275';
        let params: string = `?api_key=${api_key}`;
        let path: string = `https://api.themoviedb.org/3`;

        switch (type) {
            case 'movieById':
                return `${path}/movie/${options.filmId}${params}`;
            case 'searchByTitle':
                return `${path}/search/movie${params}&query=${options.filmTitle}`
            case 'searchByActor':
                return `${path}/search/person${params}&query=${options.actor}`
            case 'similarMovies':
                return `${path}/movie/${options.filmId}/similar${params}`;
        }
    }
}
