import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import { RightSidebar } from '~/components/RightSidebar';
import Image from '~/Image';
import configs from '~/configs';
import { popularService, imageService } from '~/apiServices';
import style from './Home.module.scss';

const cx = classNames.bind(style);

function Home() {
    const [showMovieItem, setShowMovieItem] = useState([]);
    const [showTvItem, setShowTvItem] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const resultMovie = await popularService('movie');
            const newResultMovie = resultMovie.slice(0, 10);
            setShowMovieItem(newResultMovie);
        };

        fetchAPI();
    }, []);

    useEffect(() => {
        const fetchAPI = async () => {
            const resultTv = await popularService('tv');
            const newResultTv = resultTv.slice(0, 10);
            setShowTvItem(newResultTv);
        };

        fetchAPI();
    }, []);

    const renderItem = (item) => {
        const imgLink = imageService(item.poster_path, '300');

        return (
            <li key={item.id} className={cx('item', 'col', 'l-2-4')}>
                <div className={cx('item-control')}>
                    <Image
                        className={cx('item-img')}
                        src={imgLink}
                        alt={item.title}
                    />
                    <button className={cx('play-btn')}>
                        <FontAwesomeIcon icon={faPlay} />
                    </button>
                </div>
                <h4 className={cx('item-name')}>
                    {item.original_title || item.original_name}
                </h4>
            </li>
        );
    };

    const Header = ({ title, to }) => (
        <div className={cx('header')}>
            <h1 className={cx('title')}>{title}</h1>
            <Link className={cx('more')} to={to}>
                See more
            </Link>
        </div>
    );

    return (
        <div className={cx('wrapper', 'row')}>
            <div className={cx('col', 'l-10')}>
                <Header title={'Popular movies'} to={configs.routes.movie} />
                <ul className={cx('list-item', 'row')}>
                    {showMovieItem.map((item) => {
                        const renderElement = renderItem(item);
                        return renderElement;
                    })}
                </ul>
            </div>

            <RightSidebar type="movie" />

            <div className={cx('col', 'l-10')}>
                <Header title={'Popular TV'} to={configs.routes.tv} />
                <ul className={cx('list-item', 'row')}>
                    {showTvItem.map((item) => {
                        const renderElement = renderItem(item);
                        return renderElement;
                    })}
                </ul>
            </div>

            <RightSidebar type="tv" />
        </div>
    );
}

export default Home;
