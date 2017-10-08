import React from 'react';
import AppRouter from 'components/AppRouter/AppRouter';

import './App.less';

const App = () => (
    <div className="app">
        <div className="main">
            <AppRouter />
        </div>
        <footer className="footer">
            <div className="wrapper logo"></div>
        </footer>
    </div>
);

export default App;
