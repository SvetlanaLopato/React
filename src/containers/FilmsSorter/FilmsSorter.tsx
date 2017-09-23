import React from 'react';

import './FilmsSorter.less';

export default class FilmsSorter extends React.Component {
    render() {
        return (
            <div className="films-sorter">
                Sort by
                <span>release date</span>
                <span className="films-sorter-option-active">rating</span>
            </div>
        );
    }
}
