import {
    faFacebookSquare,
    faInstagramSquare,
    faLinkedin,
    faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import images from '~/access/image';
import configs from '~/configs';
import style from './Footer.module.scss';

const cx = classNames.bind(style);

function Footer() {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className={cx('wrapper', 'row')}>
            <Link
                className={cx('footer-logo', 'col', 'l-3')}
                to={configs.routes.home}
            >
                <img src={images.logo} alt="logo" />
            </Link>
            <div className={cx('list-item', 'col', 'l-3')}>
                <Link to={configs.routes.home}>Contact us</Link>
                <Link to={configs.routes.home}>About us</Link>
                <Link to={configs.routes.home}>Privacy policy</Link>
            </div>
            <div className={cx('list-item', 'col', 'l-3')}>
                <Link to={configs.routes.movie} onClick={scrollToTop}>
                    Movies
                </Link>
                <Link onClick={scrollToTop} to={configs.routes.tv}>
                    TV Series
                </Link>
            </div>
            <div className={cx('list-item', 'col', 'l-3')}>
                <Link to={configs.routes.home}>
                    <FontAwesomeIcon
                        className={cx('social-icon')}
                        icon={faFacebookSquare}
                    />
                    Facebook
                </Link>
                <Link to={configs.routes.home}>
                    <FontAwesomeIcon
                        className={cx('social-icon')}
                        icon={faInstagramSquare}
                    />
                    Instagram
                </Link>
                <Link to={configs.routes.home}>
                    <FontAwesomeIcon
                        className={cx('social-icon')}
                        icon={faTwitterSquare}
                    />
                    Twitter
                </Link>
                <Link to={configs.routes.home}>
                    <FontAwesomeIcon
                        className={cx('social-icon')}
                        icon={faLinkedin}
                    />
                    Linkedin
                </Link>
            </div>
            <div className={cx('end', 'col', 'l-12')}>
                <p className={cx()}>© 2022 DuocLe</p>
            </div>
        </div>
    );
}

export default Footer;
