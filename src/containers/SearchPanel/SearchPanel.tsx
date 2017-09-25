import React from 'react';
import SearchFilter from 'containers/SearchFilter/SearchFilter';
import { withRouter } from 'react-router';
import './SearchPanel.less';

interface SearchPanelProps {
    match: any;
    history: any;
}

interface KeyPressEvent {
    charCode: number;
}

class SearchPanelContainer extends React.Component<SearchPanelProps, {}> {
    private input: HTMLInputElement;

    private onSearch = (): void => {
        const newSearchQuery = this.input.value;
        const currentSearchQuery = this.props.match.params.searchQuery;

        newSearchQuery !== currentSearchQuery && this.props.history.push(`/search/${newSearchQuery}`);
    }

    private onKeyPress = ({ charCode }: KeyPressEvent): void => {
        const ENTER_CHAR_CODE = 13;

        charCode === ENTER_CHAR_CODE && this.onSearch();
    }

    componentWillUpdate(nextProps: SearchPanelProps) {
        this.input.value = nextProps.match.params.searchQuery || '';
    }

    render() {
        return (
            <div className="search-panel header-panel">
                <div className="wrapper logo" >
                    <label>Find your movie</label>
                    <div className="search-field">
                        <input type="text"
                            defaultValue={this.props.match.params.searchQuery}
                            ref={input => this.input = input}
                            onKeyPress={this.onKeyPress}
                        />
                        <i className="fa fa-share"></i>
                    </div>
                    <div className="search-options">
                        <SearchFilter />
                        <button onClick={this.onSearch} className="search-button">Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

const SearchPanel = withRouter(SearchPanelContainer);

export default SearchPanel;
