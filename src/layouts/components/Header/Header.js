import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import { Navbar, NavbarItem } from '../Navbar';
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
                    <Navbar>
                        <NavbarItem title="Home" to={config.routes.home} />
                        <NavbarItem title="Movies" to={config.routes.movie} />
                        <NavbarItem title=" TV Series" to={config.routes.tv} />
                    </Navbar>
                    <div>
                        <Button gold>Đăng nhập</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
