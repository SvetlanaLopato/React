import React from 'react';
import { withRouter } from 'react-router';

interface SearchButtonProps {
    history: any;
}

class SearchButtonContainer extends React.Component<SearchButtonProps, {}> {
    private onSearch = (): void => {
        const newSearchQuery = 'get from store';

        this.props.history.push(`/search/${newSearchQuery}`);
    }

    render() {
        return (
            <button onClick={this.onSearch} className="search-button">Search</button>
        );
    }
}

const SearchButton = withRouter(SearchButtonContainer);

export default SearchButton;
