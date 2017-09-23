import React from 'react';
import SearchFilter from 'containers/SearchFilter/SearchFilter';

import './SearchPanel.less'

const SearchPanel = () => (
    <div className="search-panel header-panel">
        <div className="wrapper logo">
            <label>Find your movie</label>
            <div className="search-field">
                <input/>
                <i className="fa fa-share"></i>
            </div>
            <div className="search-options">
                <SearchFilter />
                <button className="search-button">Search</button>
            </div>
        </div>
    </div>
);

export default SearchPanel;
