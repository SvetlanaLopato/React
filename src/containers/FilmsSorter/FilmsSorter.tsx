import React from 'react';
import { connect } from 'react-redux';

import { sortFilmsBy } from 'actions';

import './FilmsSorter.less';

interface FilmsSorterProps {
    dispatch: any;
}

interface FilmsSorterState {
    sortBy: any;
}

class FilmsSorter extends React.Component<FilmsSorterProps, FilmsSorterState> {
    private sortByReleaseDate: string = 'release date';
    private sortByRating: string = 'rating';

    constructor(props) {
        super(props);
        this.state = { sortBy: this.sortByReleaseDate };
    }

    componentWillMount() {
        this.props.dispatch(sortFilmsBy(this.state.sortBy));
    }

    componentWillUpdate(nextProps, nextState) {
        this.props.dispatch(sortFilmsBy(nextState.sortBy));
    }

    render() {
        return (
            <div className="films-sorter">
                Sort by
                <span className={this.getClassNameFor(this.sortByReleaseDate)}
                      onClick={this.setSortBy.bind(this, this.sortByReleaseDate)}
                >release date</span>
                <span className={this.getClassNameFor(this.sortByRating)}
                      onClick={this.setSortBy.bind(this, this.sortByRating)}
                >rating</span>
            </div>
        );
    }

    private getClassNameFor = (sortBy: string): string => {
        const activeClassName: string = 'films-sorter-option-active';

        return sortBy === this.state.sortBy ? activeClassName : '';
    }

    private setSortBy = (sortBy: string): void => {
        this.state.sortBy !== sortBy && this.setState({ sortBy });
    }
}

export default connect()(FilmsSorter);
