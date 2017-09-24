import React from 'react';
import SearchFilter from 'containers/SearchFilter/SearchFilter';
import historyProvider from 'helper/historyProvider';
import './SearchPanel.less';

interface SearchPanelProps {
    searchQuery: string;
}

interface KeyPressEvent {
    charCode: number;
}

export default class SearchPanel extends React.Component<SearchPanelProps, {}> {
    private input: HTMLInputElement;

    private onSearch = (): void => {
        const newSearchQuery = this.input.value;
        const currentSearchQuery = this.props.searchQuery;

        newSearchQuery !== currentSearchQuery && historyProvider.navigateTo(`/search/${newSearchQuery}`);
    }

    private onKeyPress = ({ charCode }: KeyPressEvent): void => {
        const ENTER_CHAR_CODE = 13;

        charCode === ENTER_CHAR_CODE && this.onSearch();
    }

    componentWillUpdate(nextProps: SearchPanelProps) {
        this.input.value = nextProps.searchQuery || '';
    }

    render() {
        return (
            <div className="search-panel header-panel">
                <div className="wrapper logo" >
                    <label>Find your movie</label>
                    <div className="search-field">
                        <input type="text"
                            defaultValue={this.props.searchQuery}
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
