import PropTypes from 'prop-types';
import { memo } from 'react';
import { faClock, faEarthAsia, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import { imageService } from '~/apiServices';
import Image from '~/Image';
import style from './RenderResult.module.scss';

const cx = classNames.bind(style);

function RenderResult({ results }) {
    return (
        <>
            {results.map((result) => (
                <div className={cx('wrapper')} key={result.id}>
                    <Image
                        className={cx('sticker')}
                        src={imageService(result.poster_path)}
                        alt={result.original_title}
                    />
                    <div>
                        <h4 className={cx('name')}>
                            {result.original_title || result.name}
                        </h4>
                        <h5 className={cx('media-type')}>
                            Media: {result.media_type}
                        </h5>
                        <div className={cx('info')}>
                            <span className={cx('info-wrapper')}>
                                <FontAwesomeIcon icon={faEarthAsia} />
                                <span className={cx('info-item')}>
                                    {result.original_language}
                                </span>
                            </span>
                            <span className={cx('info-wrapper')}>
                                <FontAwesomeIcon icon={faClock} />
                                <span className={cx('info-item')}>
                                    {result.release_date ||
                                        result.first_air_date}
                                </span>
                            </span>
                            <span className={cx('info-wrapper')}>
                                <FontAwesomeIcon icon={faEye} />
                                <span className={cx('info-item')}>
                                    {result.vote_count}
                                </span>
                            </span>
                        </div>
                        <p className={cx('description')}>{result.overview}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

RenderResult.propTypes = {
    results: PropTypes.array.isRequired,
};

export default memo(RenderResult);
