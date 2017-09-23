import React from 'react';
import FilmsBoard from 'containers/FilmsBoard/FilmsBoard';
import FilmProfile from 'components/FilmProfile/FilmProfile';
import BackToSearchButton from 'containers/BackToSearchButton/BackToSearchButton';

const FilmPage = () => (
    <div>
        <BackToSearchButton />
        <FilmProfile />
        <FilmsBoard />
    </div>
);

export default FilmPage;
