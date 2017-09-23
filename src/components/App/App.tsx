import React from 'react';
import SearchPage from 'components/SearchPage/SearchPage';
import FilmPage from 'components/FilmPage/FilmPage';

import './App.less';

const App = () => (
    <div className="app">
        <div className="main">
            <FilmPage />
        </div>
        <footer className="footer">
            <div className="wrapper logo">
            </div>
        </footer>
    </div>
);
// <FilmPage />
// <SearchPage />

export default App;
