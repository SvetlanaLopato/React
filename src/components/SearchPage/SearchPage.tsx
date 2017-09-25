import React from 'react';
import SearchPanel from 'containers/SearchPanel/SearchPanel';
import FilmsBoard from 'containers/FilmsBoard/FilmsBoard';
import FilmsSorter from 'containers/FilmsSorter/FilmsSorter';

const SearchPage = (props) => (
    <div>
        <SearchPanel />
        <FilmsBoard>
            <FilmsSorter />
        </FilmsBoard>
    </div>
);

export default SearchPage;
