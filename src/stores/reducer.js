import {
    SET_SEARCH_VALUE,
    SET_SHOW_SEARCH_RESULT,
    SET_CURRENT_PAGE,
    SET_CURRENT_FILM_ID,
    SET_CURRENT_FILM_TYPE,
} from './constants';

const initState = {
    searchValue: '',
    showSearchResult: false,
    currentPage: 1,
    currentFilmId: '',
    currentFilmType: '',
};

function reducer(state, action) {
    switch (action.type) {
        case SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload,
            };
        case SET_SHOW_SEARCH_RESULT:
            return {
                ...state,
                showSearchResult: action.payload,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case SET_CURRENT_FILM_ID:
            return {
                ...state,
                currentFilmId: action.payload,
            };
        case SET_CURRENT_FILM_TYPE:
            return {
                ...state,
                currentFilmType: action.payload,
            };
        default:
            throw new Error('Invalid actions');
    }
}

export { initState };
export default reducer;
