import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import FilmCard from 'components/FilmCard/FilmCard';
import { fetchFilmById } from 'actions';

import './FilmsBoard.less';

interface FilmsBoardContainerProps {
    history: any;
    children?: React.ReactNode;
    filmsList: any;
    dispatch: any;
}

class FilmsBoardContainer extends React.Component<FilmsBoardContainerProps, object> {
    render() {
        const { filmsList } = this.props;
        const filmsListEmpty: boolean = !filmsList || !filmsList.length;
        const boardTitle = !filmsListEmpty && this.renderBoardTitle(filmsList.length)
        const filmsBoard = !filmsListEmpty
            ? this.renderFilmsBoard(filmsList)
            : this.renderEmptyBoard();

        return (
            <div>
                <div className="films-board-title">
                    {boardTitle}
                </div>
                {filmsBoard}
            </div>
        );
    }

    private onFilmCardClick = ({ id, title }): void => {
        this.props.history.push(`/film/${title}`);
        this.props.dispatch(fetchFilmById(id));
    }

    private renderFilmsBoard = (filmsList) => {
        const FilmCardList = filmsList.map(film => {
            return (
                <div key={film.id} onClick={this.onFilmCardClick.bind(null, film)}>
                    <FilmCard film={film}/>
                </div>
            );
        });

        return  (
            <div className="films-board wrapper">
                {FilmCardList}
            </div>
        );
    }

    private renderEmptyBoard = () => {
        return <div className="films-board-empty">No films found</div>;
    }

    private renderBoardTitle = (filmsListLength: number) => {
        const boardTitle = this.props.children
            ? <div>{filmsListLength} movies found {this.props.children}</div>
            : <div>Similar films</div>

        return (
            <div className="wrapper">
                {boardTitle}
            </div>
        );
    }
}

const FilmsBoard = withRouter(FilmsBoardContainer);

const mapStateToProps = ({ filmsList }) => ({ filmsList });

export default connect(mapStateToProps)(FilmsBoard);
