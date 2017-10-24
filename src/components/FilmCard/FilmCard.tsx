import React from 'react';

import './FilmCard.less';

interface FilmCardProps {
    film: {
        poster_path: string;
        title: string;
        release_date: string;
        vote_count: number;
    };
}

const FilmCard = ({ film }: FilmCardProps) => {
    const imgPath: string = film.poster_path
        ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
        : '/src/images/imgNotFound.png';
    const releaseYear: number = parseInt(film.release_date);

    return (
        <div className="film-card">
            <img className="film-poster" src={imgPath}/>
            <div>
                <span className="film-title ellipsis">{film.title}</span>
                <span className="film-release-date">{releaseYear}</span>
            </div>
            <div className="film-vote-count">Vote count: {film.vote_count}</div>
        </div>
    );
}

export default FilmCard;
