import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {
    filmDetailService,
    imageService,
    getCastService,
    getFinalTrailer,
    getSimilarFilm,
} from '~/apiServices';
import Image from '~/Image';
import { useStoreContext } from '~/hook';
import style from './Info.module.scss';

const cx = classNames.bind(style);

function Info() {
    const [state] = useStoreContext();
    const { currentFilmId, currentFilmType } = state;

    const [currentFilm, setCurrentFilm] = useState({});
    const [casts, setCast] = useState([]);
    const [trailerKey, setTrailerKey] = useState('');
    const [similarFilms, setSimilarFilms] = useState([]);

    const bannerImgLink = `https://image.tmdb.org/t/p/original${currentFilm.backdrop_path}`;
    const posterLink = `https://image.tmdb.org/t/p/original${currentFilm.poster_path}`;
    const trailerLink = `https://www.youtube.com/embed/${trailerKey}`;

    // Save film id in local storage
    const FILM_ID = 'film-id';
    const FILM_TYPE = 'film-type';
    if (currentFilmId && currentFilmType) {
        localStorage.setItem(FILM_ID, JSON.stringify(currentFilmId));
        localStorage.setItem(FILM_TYPE, JSON.stringify(currentFilmType));
    }
    const storageFilmId = JSON.parse(localStorage.getItem(FILM_ID));
    const storageFilmType = JSON.parse(localStorage.getItem(FILM_TYPE));

    // Get current film
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await filmDetailService(
                storageFilmType,
                storageFilmId,
            );
            setCurrentFilm(result);
        };

        fetchAPI();
    }, [storageFilmType, storageFilmId]);

    // Get cast of current film
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await getCastService(storageFilmType, storageFilmId);
            const newResult = result.slice(0, 6);

            setCast(newResult);
        };

        fetchAPI();
    }, [storageFilmType, storageFilmId]);

    // Get final trailer of film
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await getFinalTrailer(
                storageFilmType,
                storageFilmId,
            );

            setTrailerKey(result.key);
        };

        fetchAPI();
    }, [storageFilmType, storageFilmId]);

    // Get similar of current film
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await getSimilarFilm(storageFilmType, storageFilmId);

            setSimilarFilms(result);
        };

        fetchAPI();
    }, [storageFilmType, storageFilmId]);

    if (storageFilmId) {
        return (
            <div className={cx('wrapper', 'row')}>
                {/* film banner */}
                <div
                    className={cx('banner', 'col', 'l-12')}
                    style={{ backgroundImage: `url(${bannerImgLink})` }}
                />

                {/* film info */}
                <div className={cx('contain', 'row')}>
                    <div className={cx('col', 'l-4')}>
                        <img
                            className={cx('poster')}
                            src={posterLink}
                            alt={currentFilm.original_title}
                        />
                    </div>
                    <div className={cx('info', 'col', 'l-8')}>
                        <h1 className={cx('name')}>
                            {currentFilm.original_title}
                        </h1>
                        <div className={cx('genres')}>
                            {currentFilm.genres &&
                                currentFilm.genres.map((genre) => (
                                    <span key={genre.id}>{genre.name}</span>
                                ))}
                        </div>
                        <p className={cx('description')}>
                            {currentFilm.overview}
                        </p>
                        <div className={cx('cast')}>
                            <h1>Cast</h1>
                            <ul className={cx('cast-list')}>
                                {casts &&
                                    casts.map((cast) => {
                                        const profile_path = imageService(
                                            cast.profile_path,
                                        );
                                        return (
                                            <li
                                                className={cx('cast-item')}
                                                key={cast.id}
                                            >
                                                <img
                                                    className={cx(
                                                        'cast-avatar',
                                                    )}
                                                    src={profile_path}
                                                    alt={cast.name}
                                                />
                                                <h5 className={cx('cast-name')}>
                                                    {cast.name}
                                                </h5>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                    </div>
                </div>

                {/*  final trailer */}
                <div className={cx('trailer', 'col', 'l-12')}>
                    <h1 className={cx('title')}>Final Trailer</h1>
                    <iframe
                        src={trailerLink}
                        frameBorder="0"
                        width="100%"
                        height="600px"
                        allow="autoplay; encrypted-media"
                        title="video"
                    />
                </div>
                {/*  list similar */}
                <div className={cx('similar', 'col', 'l-12')}>
                    <h1 className={cx('title')}>Similar Films</h1>
                    <Swiper spaceBetween={20} slidesPerView={'auto'}>
                        {similarFilms.map((similarFilm) => {
                            const similarFilmPoster = `https://image.tmdb.org/t/p/original${similarFilm.poster_path}`;

                            return (
                                <SwiperSlide
                                    className={cx('similar-item', 'l-2')}
                                    key={similarFilm.id}
                                >
                                    <Image
                                        className={cx('similar-image')}
                                        src={similarFilmPoster}
                                        alt={
                                            similarFilm.title ||
                                            similarFilm.name
                                        }
                                    />
                                    <h4 className={cx('similar-name')}>
                                        {similarFilm.title || similarFilm.name}
                                    </h4>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        );
    }
}

export default Info;
