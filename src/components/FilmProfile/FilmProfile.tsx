import './FilmProfile.less';

import React from 'react';

const FilmProfile = () => (
    <div className="header-panel">
        <div className="wrapper logo">
            <div className="film-profile">
                <img className="film-profile-poster" src="https://i.pinimg.com/736x/17/ba/70/17ba70b5d152cb9042e4a0785dccf834--posters-vintage-vintage-comics.jpg"/>
                <div>
                    <span className="film-profile-title">Batman Forever</span>
                    <div className="film-profile-rating">3.2</div>
                    <div>Oskar-winning movie </div>
                    <span className="film-profile-release-year">1994</span>
                    <span className="film-profile-duration">154 min</span>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    <div className="file-profile-director">Director: Joel Schumacher</div>
                    <div>Cast: Val Kilmer, Chris O'Donnell, Jim Carrey, Tommy Lee Jones, Nicole Kidman, Michael Gough, Pat Hingle, Drew Barrymore, Debi Mazar, Rene Auberjonois</div>
                </div>
            </div>
        </div>
    </div>
);

export default FilmProfile;
