import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import SearchPage from 'components/SearchPage/SearchPage';
import FilmPage from 'components/FilmPage/FilmPage';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/search/:searchQuery?" component={SearchPage} exact />
            <Route path="/film/:filmTitle" component={FilmPage} exact />
            <Redirect to="/search" />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;
