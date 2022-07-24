import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { imageService, appendService } from '~/apiServices';
import Image from '~/Image';
import { useStoreContext } from '~/hook';
import { setCurrentFilmId, setCurrentFilmType } from '~/stores/actions';
import 'swiper/css';
import style from './FilmDetail.module.scss';

const cx = classNames.bind(style);

function FilmDetail() {
    const [state, dispatch] = useStoreContext();
    const { currentFilmId, currentFilmType } = state;
    const [currentFilm, setCurrentFilm1] = useState(null);

    // Save film id in local storage
    const FILM_ID = 'film-id';
    const FILM_TYPE = 'film-type';
    if (currentFilmId && currentFilmType) {
        sessionStorage.setItem(FILM_ID, JSON.stringify(currentFilmId));
        sessionStorage.setItem(FILM_TYPE, JSON.stringify(currentFilmType));
    }
    const storageFilmType = JSON.parse(sessionStorage.getItem(FILM_TYPE));
    const storageFilmId = JSON.parse(sessionStorage.getItem(FILM_ID));

    useEffect(() => {
        const FetchAPI = async () => {
            const result = await appendService(storageFilmType, storageFilmId);
            setCurrentFilm1(result);
        };

        FetchAPI();
    }, [storageFilmType, storageFilmId]);

    if (!currentFilm) return;

    const listCast = currentFilm.credits.cast.slice(0, 6);
    const similarFilms = currentFilm.similar.results;
    const listVideo = currentFilm.videos.results;
    let trailerKey;
    if (listVideo.length > 0) {
        trailerKey = listVideo[0].key;
    }

    const bannerImgLink = `https://image.tmdb.org/t/p/original${currentFilm.backdrop_path}`;
    const posterLink = `https://image.tmdb.org/t/p/original${currentFilm.poster_path}`;
    const trailerLink = `https://www.youtube.com/embed/${trailerKey}`;

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
                        {currentFilm.original_title ||
                            currentFilm.original_name}
                    </h1>
                    <div className={cx('genres')}>
                        {currentFilm.genres &&
                            currentFilm.genres.map((genre) => (
                                <span key={genre.id}>{genre.name}</span>
                            ))}
                    </div>
                    <p className={cx('description')}>{currentFilm.overview}</p>
                    <div className={cx('cast')}>
                        <h1>Cast</h1>
                        <ul className={cx('cast-list')}>
                            {listCast &&
                                listCast.map((cast) => {
                                    const profile_path = imageService(
                                        cast.profile_path,
                                    );
                                    return (
                                        <li
                                            className={cx('cast-item')}
                                            key={cast.id}
                                        >
                                            <img
                                                className={cx('cast-avatar')}
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
                                <Link
                                    to={`/@${similarFilm.id}`}
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                        dispatch(
                                            setCurrentFilmId(similarFilm.id),
                                        );
                                        dispatch(
                                            setCurrentFilmType(storageFilmType),
                                        );
                                    }}
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
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}

export default FilmDetail;
