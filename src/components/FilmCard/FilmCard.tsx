import React from 'react';

import { FilmCardI } from 'types';

import './FilmCard.less';

interface FilmCardProps {
    film: FilmCardI;
}

const FilmCard = ({ film }: FilmCardProps) => {
    const imgPath: string = film.poster_path
        ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
        : '/src/images/imgNotFound.png';
    const releaseYear: string = film.release_date && film.release_date.substr(0, 4);

    return (
        <div className="film-card">
            <img className="film-poster" src={imgPath}/>
            <div>
                <span className="film-title ellipsis">{film.title}</span>
                {releaseYear && <span className="film-release-date">{releaseYear}</span>}
            </div>
            <div className="film-vote-count">Vote count: {film.vote_count}</div>
        </div>
    );
}

export default FilmCard;
