import React from 'react';
import { connect } from 'react-redux';

import { setSearchOption } from 'actions';

import './SearchFilter.less';

interface SearchFilterProps {
    dispatch: any;
}

interface SearchFilterState {
    searchBy: string;
}

class SearchFilter extends React.Component<SearchFilterProps, SearchFilterState> {
    private searchByTitle = 'title';
    private searchByActor = 'actor';

    constructor() {
        super();
        this.state = { searchBy: this.searchByTitle };
    }

    componentWillMount() {
        this.props.dispatch(setSearchOption(this.state.searchBy));
    }

    componentWillUpdate(nextProps, nextState) {
        this.props.dispatch(setSearchOption(nextState.searchBy, false));
    }

    render() {
        return (
            <div className="search-filter">
                <span>Search by</span>
                <span className={this.getClassNameFor(this.searchByTitle)}
                      onClick={this.setSearchBy.bind(this, this.searchByTitle)}
                >Title</span>
                <span className={this.getClassNameFor(this.searchByActor)}
                      onClick={this.setSearchBy.bind(this, this.searchByActor)}
                >Actor</span>
            </div>
        );
    }

    private setSearchBy = (searchBy: string): void => {
        this.state.searchBy !== searchBy && this.setState({ searchBy });
    }

    private getClassNameFor = (searchBy: string): string => {
        const className: string = 'search-filter-option';
        const activeClassName: string = 'search-filter-option-active';

        return this.state.searchBy === searchBy ? activeClassName : className;
    }
}

const mapDispatchToProps = (dispatch) => ({ dispatch: (action) => dispatch(action) });

export default connect(null, mapDispatchToProps)(SearchFilter);
