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
    private onFilmCardClick = ({ id, title }): void => {
        this.props.history.push(`/film/${title}`);
        this.props.dispatch(fetchFilmById(id));
    }

    render() {
        const { filmsList, children } = this.props;
        const filmsListEmpty: boolean = !filmsList || !filmsList.length;
        const boardTitle = !filmsListEmpty && renderBoardTitle(children, filmsList.length)
        const filmsBoard = !filmsListEmpty
            ? renderFilmsBoard.call(this, filmsList)
            : renderEmptyBoard();

        return (
            <div>
                <div className="films-board-title">
                    {boardTitle}
                </div>
                {filmsBoard}
            </div>
        );
    }
}

function renderFilmsBoard(filmsList) {
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

function renderEmptyBoard() {
    return <div className="films-board-empty">No films found</div>;
}

function renderBoardTitle(children, filmsListLength: number) {
    const boardTitle = children
        ? <div>{filmsListLength} movies found {children}</div>
        : <div>Similar films</div>

    return (
        <div className="wrapper">
            {boardTitle}
        </div>
    );
}

const FilmsBoard = withRouter(FilmsBoardContainer);

const mapStateToProps = ({ filmsList }) => ({ filmsList });
const mapDispatchToProps = (dispatch) => ({ dispatch: (action) => dispatch(action) });

export default connect(mapStateToProps, mapDispatchToProps)(FilmsBoard);
