import { Link } from 'react-router-dom';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames/bind';

import Image from '~/Image';
import { useStoreContext, useTrendingService } from '~/hook';
import { setCurrentFilmId, setCurrentFilmType } from '~/stores/actions';
import { imageService } from '~/apiServices';
import style from './Slider.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const cx = classNames.bind(style);

function Slider() {
    const [state, dispatch] = useStoreContext();
    const sliderData = useTrendingService();

    return (
        <div className={cx('wrapper')}>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={5}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {sliderData.map((data) => {
                    const sliderImg = imageService(data.poster_path, '300');
                    return (
                        <SwiperSlide
                            className={cx('slider-item', 'l-2-4')}
                            key={data.id}
                        >
                            <Link
                                to={`/@${data.id}`}
                                className={cx('slider-link')}
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                    dispatch(setCurrentFilmId(data.id));
                                    dispatch(
                                        setCurrentFilmType(data.media_type),
                                    );
                                }}
                            >
                                <Image
                                    className={cx('image')}
                                    src={sliderImg}
                                    alt={data.title || data.name}
                                />
                                <div className={cx('name')}>
                                    {data.title || data.name}
                                </div>
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default Slider;
