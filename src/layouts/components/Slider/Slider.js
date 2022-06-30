import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames/bind';

// import configs from '~/configs';
import Image from '~/Image';
import { trendingService, imageService } from '~/apiServices';
import style from './Slider.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const cx = classNames.bind(style);

function Slider() {
    const [sliderData, setSliderData] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            const res = await trendingService();
            const result = res.slice(0, 10);

            setSliderData(result);
        };

        fetchAPI();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={5}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {sliderData.map((data) => {
                    const sliderImg = imageService(data.poster_path, '300');
                    return (
                        <SwiperSlide
                            className={cx('slider-item')}
                            key={data.id}
                        >
                            <Image
                                onClick={() => alert(data.title || data.name)}
                                className={cx('image')}
                                src={sliderImg}
                                alt={data.title || data.name}
                            />
                            <div className={cx('name')}>
                                {data.title || data.name}
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default Slider;
