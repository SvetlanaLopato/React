import React from 'react';

import SearchPanel from 'components/SearchPanel/SearchPanel';
import FilmsBoard from 'containers/FilmsBoard/FilmsBoard';
import FilmsSorter from 'containers/FilmsSorter/FilmsSorter';

const SearchPage = () => (
    <div>
        <SearchPanel />
        <FilmsBoard>
            <FilmsSorter />
        </FilmsBoard>
    </div>
);

export default SearchPage;
