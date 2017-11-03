import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import FilmsBoard from 'containers/FilmsBoard/FilmsBoard';
import FilmProfile from 'components/FilmProfile/FilmProfile';
import BackToSearchButton from 'containers/BackToSearchButton/BackToSearchButton';
import { fetchFilmByTitle, fetchSimilarFilms } from 'actions';

interface FilmPageProps {
    match: any;
    dispatch: any;
    filmInfo: any;
}

class FilmPageContainer extends React.Component<FilmPageProps, {}> {
    componentWillMount() {
        const filmId: number = this.props.filmInfo && this.props.filmInfo.id;
        const filmTitle: string = this.props.match.params.filmTitle;

        !filmId && this.props.dispatch(fetchFilmByTitle(filmTitle));
    }

    componentWillUpdate(newProps) {
        const currentFilmInfoId: string = this.props.filmInfo && this.props.filmInfo.id;
        const newFilmInfoId: string = newProps.filmInfo && newProps.filmInfo.id;

        if (currentFilmInfoId !== newFilmInfoId) {
            newProps.dispatch(fetchSimilarFilms(newFilmInfoId));
        }
    }

    render() {
        const filmProfile = this.props.filmInfo && <FilmProfile film={this.props.filmInfo} />;

        return (
            <div>
                <BackToSearchButton />
                {filmProfile}
                <FilmsBoard />
            </div>
        );
    }
}

const FilmPage = withRouter(FilmPageContainer);

const mapStateToProps = ({ film }) => ({ filmInfo: film.filmInfo });

export default connect(mapStateToProps)(FilmPage);
