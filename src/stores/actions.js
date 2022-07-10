import {
    SET_SEARCH_VALUE,
    SET_SHOW_SEARCH_RESULT,
    SET_CURRENT_PAGE,
} from './constants';

export const setSearchValue = (payload) => ({
    type: SET_SEARCH_VALUE,
    payload,
});

export const setShowSearchResult = (payload) => ({
    type: SET_SHOW_SEARCH_RESULT,
    payload,
});

export const setCurrentPage = (payload) => ({
    type: SET_CURRENT_PAGE,
    payload,
});
