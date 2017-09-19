import './FilmsBoard.less';

import React from 'react';
import FilmCard from 'components/FilmCard/FilmCard';

interface Props {
  children?: React.ReactNode;
};


export default class FilmsBoard extends React.Component<Props, object> {
    render() {
        const filmsListEmpty = false;

        return (
            <div>
                <div className="films-board-title">
                    {
                        !filmsListEmpty && <div className="wrapper">
                            {
                                this.props.children
                                ? <div>7 movies found {this.props.children}</div>
                                : <div>Films by Mr. White</div>
                            }
                        </div>
                    }
                </div>
                {
                    !filmsListEmpty && <div className="films-board wrapper">
                        <FilmCard />
                        <FilmCard />
                        <FilmCard />
                        <FilmCard />
                        <FilmCard />
                        <FilmCard />
                        <FilmCard />
                        <FilmCard />
                    </div>
                }
                {
                    filmsListEmpty && <div className="films-board-empty">No films found</div>
                }
            </div>
        );
    }
}
