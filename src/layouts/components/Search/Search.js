import { useCallback, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { useDebounce } from '~/hook';
import RenderResult from './RenderResult';
import searchService from '~/apiServices/searchService';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import style from './Search.module.scss';
import Button from '~/components/Button';
import configs from '~/configs';

const cx = classNames.bind(style);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);

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
        setSearchValue('');
        setSearchResult([]);
    };

    const handleChangeValue = (e) => {
        setSearchValue(e.target.value);
    };

    // let history = useHistory();
    // const handleShowMore = () => {
    //     history.push(configs.routes.search);
    // };

    return (
        <Tippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h3 className={cx('label')}>Result</h3>
                        <NewResult />
                        <div className={cx('show')}>
                            {/* to={configs.routes.search} */}
                            <Button to={configs.routes.search} blue>
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
                        placeholder="Search your film..."
                        onChange={handleChangeValue}
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
