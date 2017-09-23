import React from 'react';

import './FilmProfile.less';

const FilmProfile = () => (
    <div className="header-panel">
        <div className="wrapper logo">
            <div className="film-profile">
                <img className="film-profile-poster" src=""/>
                <div>
                    <span className="film-profile-title"></span>
                    <div className="film-profile-rating"></div>
                    <div></div>
                    <span className="film-profile-release-year"></span>
                    <span className="film-profile-duration"></span>
                    <div></div>
                    <div className="file-profile-director"></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
);

export default FilmProfile;
