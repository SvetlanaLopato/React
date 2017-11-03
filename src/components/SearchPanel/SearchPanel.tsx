import React from 'react';

import SearchFilter from 'containers/SearchFilter/SearchFilter';
import SearchButton from 'containers/SearchButton/SearchButton';
import SearchInput from 'containers/SearchInput/SearchInput';
import './SearchPanel.less';

const SearchPanel = () => (
    <div className="search-panel header-panel">
        <div className="wrapper logo" >
            <label>Find your movie</label>
            <SearchInput />
            <div className="search-options">
                <SearchFilter />
                <SearchButton />
            </div>
        </div>
    </div>
);

export default SearchPanel;
