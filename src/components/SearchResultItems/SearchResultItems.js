import PropTypes from 'prop-types';
import { faClock, faEarthAsia, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import { imageService } from '~/apiServices';
import Image from '~/Image';
import style from './SearchResultItems.module.scss';

const cx = classNames.bind(style);

function SearchResultItems({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('sticker')}
                src={imageService(data.poster_path)}
                alt={data.original_title}
            />
            <div>
                <h4 className={cx('name')}>
                    {data.original_title || data.name}
                </h4>
                <h5 className={cx('media-type')}>Media: {data.media_type}</h5>
                <div className={cx('info')}>
                    <span className={cx('info-wrapper')}>
                        <FontAwesomeIcon icon={faEarthAsia} />
                        <span className={cx('info-item')}>
                            {data.original_language}
                        </span>
                    </span>
                    <span className={cx('info-wrapper')}>
                        <FontAwesomeIcon icon={faClock} />
                        <span className={cx('info-item')}>
                            {data.release_date || data.first_air_date}
                        </span>
                    </span>
                    <span className={cx('info-wrapper')}>
                        <FontAwesomeIcon icon={faEye} />
                        <span className={cx('info-item')}>
                            {data.vote_count}
                        </span>
                    </span>
                </div>
                <p className={cx('description')}>{data.overview}</p>
            </div>
        </div>
    );
}

SearchResultItems.propTypes = {
    data: PropTypes.object.isRequired,
};

export default SearchResultItems;
