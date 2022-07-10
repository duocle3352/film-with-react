import { useCallback, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { actions } from '~/stores';
import { useDebounce, useStoreContext } from '~/hook';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import configs from '~/configs';
import searchService from '~/apiServices/searchService';
import RenderResult from './RenderResult';
import Button from '~/components/Button';
import style from './Search.module.scss';

const cx = classNames.bind(style);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [state, dispatch] = useStoreContext();
    const { searchValue, showSearchResult } = state;
    const debounce = useDebounce(searchValue, 800);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchAPI = async () => {
            const movieResults = await searchService(debounce);
            const newMovieResults = movieResults.slice(0, 5);

            setSearchResult(newMovieResults);
        };

        fetchAPI();
    }, [debounce]);

    const NewResult = useCallback(() => {
        return <RenderResult data={searchResult} />;
    }, [searchResult]);

    const handleClear = () => {
        inputRef.current.focus();
        dispatch(actions.setSearchValue(''));
        setSearchResult([]);
    };

    const handleChangeValue = (e) => {
        dispatch(actions.setSearchValue(e.target.value));
        dispatch(actions.setCurrentPage(1));
    };

    return (
        <Tippy
            interactive
            visible={showSearchResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h3 className={cx('label')}>Result</h3>
                        <NewResult />
                        <div className={cx('show')}>
                            <Button to={configs.routes.search} blue>
                                Show more
                            </Button>
                        </div>
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={() => dispatch(actions.setShowSearchResult(false))}
        >
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        className={cx('search-input')}
                        placeholder="Search your film..."
                        onChange={handleChangeValue}
                        onFocus={() =>
                            dispatch(actions.setShowSearchResult(true))
                        }
                    />
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        className={cx('clear')}
                        onClick={handleClear}
                    />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
        </Tippy>
    );
}

export default Search;
