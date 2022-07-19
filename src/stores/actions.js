import {
    SET_SEARCH_VALUE,
    SET_SHOW_SEARCH_RESULT,
    SET_CURRENT_PAGE,
    SET_CURRENT_FILM_ID,
    SET_CURRENT_FILM_TYPE,
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

export const setCurrentFilmId = (payload) => ({
    type: SET_CURRENT_FILM_ID,
    payload,
});

export const setCurrentFilmType = (payload) => ({
    type: SET_CURRENT_FILM_TYPE,
    payload,
});
