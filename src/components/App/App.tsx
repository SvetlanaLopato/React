import './App.less';

import React from 'react';
import SearchPage from 'components/SearchPage/SearchPage';
import FilmPage from 'components/FilmPage/FilmPage';

const App = () => (
    <div className="app">
        <div className="main">
            <SearchPage />
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
