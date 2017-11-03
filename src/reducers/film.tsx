import * as actions from 'actions';

import { FilmAction, FilmState } from 'types';

const film = (state: FilmState = {}, action: FilmAction): FilmState => {
    switch (action.type) {
        case actions.UPDATE_FILM_PROFILE:
            return { ...state, filmInfo: action.filmInfo };
        default:
            return state;
    }
}

export default film;
