import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSign, faSignIn, faUser } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SearchResultItems from '~/components/SearchResultItems';
import style from './Header.module.scss';
import { logo } from '~/access/image';

const cx = classNames.bind(style);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('header')}>
            <div className="grid wide">
                <div className={cx('wrapper', 'row')}>
                    <img src={logo} alt="Netflix" />

                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h3 className={cx('label')}>Phim</h3>
                                    <SearchResultItems />
                                    <SearchResultItems />
                                    <SearchResultItems />
                                    <SearchResultItems />
                                    <SearchResultItems />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input className={cx('search-input')} placeholder="Bạn muốn tìm gì?" />
                            <FontAwesomeIcon icon={faCircleXmark} className={cx('clear')} />
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </Tippy>

                    <div className={cx('actions')}>
                        <Button gold rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
                            Đăng nhập
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
