import React from 'react';
import FilmCard from 'components/FilmCard/FilmCard';

import './FilmsBoard.less';

interface Props {
  children?: React.ReactNode;
};

export default class FilmsBoard extends React.Component<Props, object> {
    render() {
        const filmsListEmpty = false;
        const boardTitle = !filmsListEmpty && renderBoardTitle(this.props.children)
        const filmsBoard = filmsListEmpty
            ? renderEmptyBoard()
            : renderFilmsBoard();

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
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
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
        ? <div>7 movies found {children}</div>
        : <div>Films by Mr. White</div>

    return (
        <div className="wrapper">
            {boardTitle}
        </div>
    );
}
