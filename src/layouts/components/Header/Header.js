import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import config from '~/configs';
import style from './Header.module.scss';
import images from '~/access/image';

const cx = classNames.bind(style);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className={cx('content', 'row')}>
                    <Link to={config.routes.home}>
                        <img src={images.logo} alt="Netflix" />
                    </Link>
                    <div>
                        <NavLink
                            className={cx('nav')}
                            to={config.routes.home}
                            exact="true"
                        >
                            Home
                        </NavLink>
                        <NavLink className={cx('nav')} to={config.routes.movie}>
                            Movies
                        </NavLink>
                        <NavLink className={cx('nav')} to={config.routes.tv}>
                            TV Series
                        </NavLink>
                    </div>
                    <div>
                        <Button gold>Đăng nhập</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;