import React from 'react';
import { withRouter } from 'react-router';

interface KeyPressEvent {
    charCode: number;
}

interface SearchInputContainerProps {
    match: any;
    history: any;
}

class SearchInputContainer extends React.Component<SearchInputContainerProps, {}> {
    private input: HTMLInputElement;

    private onKeyPress = ({ charCode }: KeyPressEvent): void => {
        const ENTER_CHAR_CODE = 13;

        charCode === ENTER_CHAR_CODE && this.onSearch();
    }

    private onSearch = (): void => {
        const newSearchQuery = this.input.value;
        const currentSearchQuery = this.props.match.params.searchQuery;

        newSearchQuery !== currentSearchQuery && this.props.history.push(`/search/${newSearchQuery}`);
    }

    componentWillUpdate(nextProps: SearchInputContainerProps) {
        this.input.value = nextProps.match.params.searchQuery || '';
    }

    render() {
        return (
            <div className="search-field">
                <input type="text"
                    defaultValue={this.props.match.params.searchQuery}
                    ref={input => this.input = input}
                    onKeyPress={this.onKeyPress}
                />
                <i className="fa fa-share"></i>
            </div>
        );
    }
}

const SearchInput = withRouter(SearchInputContainer);

export default SearchInput;
