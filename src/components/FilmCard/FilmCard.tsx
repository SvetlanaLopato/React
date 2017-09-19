import './FilmCard.less';

import React from 'react';

export default class FilmCard extends React.Component {
    render() {
        return (
            <div className="film-card">
                <img className="film-poster"
                    src="https://i.pinimg.com/736x/17/ba/70/17ba70b5d152cb9042e4a0785dccf834--posters-vintage-vintage-comics.jpg"
                />
                <div>
                    <span className="film-title ellipsis">Batman Forever</span>
                    <span className="film-release-date">1995</span>
                </div>
                <div className="film-genre">Action & Adventure</div>
            </div>
        );
    }
}
