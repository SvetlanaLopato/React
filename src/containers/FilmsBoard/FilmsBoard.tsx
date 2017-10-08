import React from 'react';
import FilmCard from 'components/FilmCard/FilmCard';
import { withRouter } from 'react-router';
import './FilmsBoard.less';

interface FilmsBoardContainerProps {
    children?: React.ReactNode;
    history: any;
}

class FilmsBoardContainer extends React.Component<FilmsBoardContainerProps, object> {
    private onFilmCardClick = (): void => {
        const filmTitle = 'Film title';

        this.props.history.push(`/film/${filmTitle}`)
    }

    render() {
        const filmsListEmpty = false;
        const boardTitle = !filmsListEmpty && renderBoardTitle(this.props.children)
        const filmsBoard = filmsListEmpty
            ? renderEmptyBoard()
            : renderFilmsBoard.call(this);

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

function renderFilmsBoard() {
    return  (
        <div className="films-board wrapper">
            <div onClick={this.onFilmCardClick}><FilmCard /></div>
        </div>
    );
}

function renderEmptyBoard() {
    return (
        <div className="films-board-empty">No films found</div>
    );
}

function renderBoardTitle(children: React.ReactNode) {
    const boardTitle = children
        ? <div>movies found {children}</div>
        : <div>Films by</div>

    return (
        <div className="wrapper">
            {boardTitle}
        </div>
    );
}

const FilmsBoard = withRouter(FilmsBoardContainer);

export default FilmsBoard;
