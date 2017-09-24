import React from 'react';
import { Router } from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import SearchPage from 'components/SearchPage/SearchPage';
import FilmPage from 'components/FilmPage/FilmPage';
import historyProvider from 'helper/historyProvider';

const history = historyProvider.getHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/search/:searchQuery" component={SearchPage} exact />
            <Route path="/search" component={SearchPage} exact />
            <Route path="/film/:filmTitle" component={FilmPage} exact />
            <Redirect to="/search" />
        </Switch>
    </Router>
);

export default AppRouter;
