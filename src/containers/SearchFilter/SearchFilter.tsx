import React from 'react';

import './SearchFilter.less';

export default class SearchFilter extends React.Component {
    render() {
        return (
            <div className="search-filter">
                <span>Search by</span>
                <span className="search-filter-option-active">Title</span>
                <span className="search-filter-option">Director</span>
            </div>
        );
    }
}
