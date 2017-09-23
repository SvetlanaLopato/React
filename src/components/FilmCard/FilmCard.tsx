import React from 'react';

import './FilmCard.less';

export default class FilmCard extends React.Component {
    render() {
        return (
            <div className="film-card">
                <img className="film-poster" src="" />
                <div>
                    <span className="film-title ellipsis"></span>
                    <span className="film-release-date"></span>
                </div>
                <div className="film-genre"></div>
            </div>
        );
    }
}
