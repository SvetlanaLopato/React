import React from 'react';

import './FilmProfile.less';

interface FilmProfileProps {
    film: {
        poster_path: string;
        title: string;
        vote_average: number;
        genres: any;
        release_date: string;
        runtime: string;
        overview: string;
        production_companies: any;
        original_language: string;
    };
}

const FilmProfile = ({ film }: FilmProfileProps) => {
    const filmDescription = film && getFilmDescription({ film });

    return (
        <div className="header-panel">
            <div className="wrapper logo">
                {filmDescription}
            </div>
        </div>
    );
}

export default FilmProfile;

function getFilmDescription({ film }: FilmProfileProps) {
    const genres: string = convertToString(film.genres);
    const companies: string = convertToString(film.production_companies);
    const imgPath: string = getImgPath(film.poster_path);
    const releaseYear: number = parseInt(film.release_date);

    return (
        <div className="film-profile">
            <img className="film-profile-poster" src={imgPath}/>
            <div>
                <span className="film-profile-title">{film.title}</span>
                <div className="film-profile-rating">{film.vote_average}</div>
                <div>{genres}</div>
                <span className="film-profile-release-year">{releaseYear}</span>
                <span className="film-profile-duration">{film.runtime} min</span>
                <div>{film.overview}</div>
                <div className="file-profile-director">Production companies: {companies}</div>
                <div>Original language: {film.original_language}</div>
            </div>
        </div>
    );
}

function convertToString(arr): string {
    return Array.isArray(arr) && arr.map(element => element.name).join(', ');
}

function getImgPath(path: string): string {
    const defaultImgPath: string = '/src/images/imgNotFound.png';
    const imgPath: string = `https://image.tmdb.org/t/p/w500${path}`;

    return path ? imgPath : defaultImgPath;
}
