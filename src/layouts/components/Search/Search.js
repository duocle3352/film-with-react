import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { useDebounce } from '~/hook';
import searchService from '~/apiServices/searchService';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SearchResultItems from '~/components/SearchResultItems';
import style from './Search.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(style);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchMovieResult, setSearchMovieResult] = useState([]);
    const [searchTVResult, setSearchTVResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    const debounce = useDebounce(searchValue, 800);

    // fetch movie api
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchMovieResult([]);
            setSearchTVResult([]);
            return;
        }

        const fetchMovieAPI = async () => {
            const movieResults = await searchService(debounce);
            const newMovieResults = movieResults.slice(0, 9);

            setSearchMovieResult(newMovieResults);
        };

        // const fetchTvAPI = async () => {
        //     const TvResults = await searchService('tv', debounce);
        //     const newTvResult = TvResults.slice(0, 3);

        //     setSearchTVResult(newTvResult);
        // };

        fetchMovieAPI();
        // fetchTvAPI();
    }, [debounce]);

    const handleClear = () => {
        inputRef.current.focus();
        setSearchValue('');
        setSearchMovieResult([]);
    };

    return (
        <Tippy
            interactive
            visible={
                (showResult && searchMovieResult.length > 0) ||
                (showResult && searchTVResult.length > 0)
            }
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h3 className={cx('label')}>Result</h3>
                        {searchMovieResult.map((result) => (
                            <SearchResultItems key={result.id} data={result} />
                        ))}
                        <div className={cx('show')}>
                            <Button to="/search" blue>
                                Show more
                            </Button>
                        </div>
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={() => setShowResult(false)}
        >
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        className={cx('search-input')}
                        placeholder="Bạn muốn tìm gì?"
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                        }}
                        onFocus={() => setShowResult(true)}
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
