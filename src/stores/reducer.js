import {
    SET_SEARCH_VALUE,
    SET_SHOW_SEARCH_RESULT,
    SET_CURRENT_PAGE,
} from './constants';

const initState = {
    searchValue: '',
    showSearchResult: false,
    currentPage: 1,
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
        default:
            throw new Error('Invalid actions');
    }
}

export { initState };
export default reducer;
