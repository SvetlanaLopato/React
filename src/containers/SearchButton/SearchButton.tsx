import React from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router';
import { setSearchQuery } from 'actions';

interface SearchButtonProps {
    history: any;
    inputValue: string;
    dispatch: any;
}

class SearchButtonContainer extends React.Component<SearchButtonProps, {}> {
    private onSearch = (): void => {
        const searchQuery: string = this.props.inputValue;

        this.props.dispatch(setSearchQuery(searchQuery, true));
        this.props.history.push(`/search/${searchQuery}`);
    }

    render() {
        return (
            <button onClick={this.onSearch} className="search-button">Search</button>
        );
    }
}

const SearchButton = withRouter(SearchButtonContainer);

const mapStateToProps = ({ search }) => ({ inputValue: search.inputValue });
const mapDispatchToProps = (dispatch) => ({ dispatch: (action) => dispatch(action) });

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
