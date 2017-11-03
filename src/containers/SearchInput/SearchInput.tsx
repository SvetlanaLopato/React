import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { InputI, KeyPressEvent } from 'types';
import {
    fetchFilmsByTitle,
    fetchFilmsByActor,
    setSearchQuery,
    setInputValue,
    resetFilmsList
} from 'actions';

interface SearchInputContainerProps {
    match: any;
    history: any;
    dispatch: any;
    searchBy: string;
    searchQuery: string;
    needSearch: boolean;
}

class SearchInputContainer extends React.Component<SearchInputContainerProps, {}> {
    private input: HTMLInputElement;

    componentWillMount() {
        const currentSearchQuery: string = this.props.match.params.searchQuery;

        this.props.dispatch(setSearchQuery(currentSearchQuery || '', true));
    }

    componentWillUpdate(nextProps: SearchInputContainerProps) {
        if (nextProps.needSearch) {
            this.synchronizeInput(this.input, nextProps);
            this.fetchFilmsList(nextProps.searchQuery, nextProps.searchBy);
        }
    }

    render() {
        return (
            <div className="search-field">
                <input type="text"
                    ref={input => this.input = input}
                    onKeyPress={this.onKeyPress}
                    onChange={this.setInputValue}
                />
                <i className="fa fa-share"></i>
            </div>
        );
    }

    private synchronizeInput(input: InputI, { searchQuery, dispatch }: SearchInputContainerProps): void {
        input.value = input.value || searchQuery;
        dispatch(setInputValue(searchQuery));
    }

    private onKeyPress = ({ charCode }: KeyPressEvent): void => {
        const ENTER_CHAR_CODE: number = 13;
        const newSearchQuery: string = this.input.value;
        const currentSearchQuery: string = this.props.searchQuery;

        if (charCode !== ENTER_CHAR_CODE) {
            return;
        }

        this.props.history.push(`/search/${newSearchQuery}`);
        this.props.dispatch(setSearchQuery(newSearchQuery, true));
    }

    private setInputValue = ():void => {
        this.props.dispatch(setInputValue(this.input.value));
    }

    private fetchFilmsList = (searchQuery: string, searchBy: string = this.props.searchBy): void => {
        const searchByTitle: string = 'title';
        const dispatch = this.props.dispatch;

        if (!searchQuery) {
            dispatch(resetFilmsList());
            return;
        }

        if (searchBy === searchByTitle) {
            dispatch(fetchFilmsByTitle(searchQuery));
        } else {
            dispatch(fetchFilmsByActor(searchQuery));
        }
    }
}

const SearchInput = withRouter(SearchInputContainer);

const mapStateToProps = ({ search }) => ({
    searchBy: search.searchBy,
    searchQuery: search.searchQuery,
    needSearch: search.needSearch,
});

export default connect(mapStateToProps)(SearchInput);
