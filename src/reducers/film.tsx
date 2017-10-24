import * as actions from 'actions';

const film = (state = {}, action) => {
    switch (action.type) {
        case actions.UPDATE_FILM_PROFILE:
            return { ...state, filmInfo: action.filmInfo };
        default:
            return state;
    }
}

export default film;
