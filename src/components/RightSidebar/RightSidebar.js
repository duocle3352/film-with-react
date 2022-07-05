import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import Image from '~/Image';
import { topRateService, imageService } from '~/apiServices';
import configs from '~/configs';
import style from './RightSidebar.module.scss';

const cx = classNames.bind(style);

function RightSidebar({ type }) {
    const [listItem, setListItem] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const resultTv = await topRateService(type);
            const newResultTv = resultTv.slice(0, 10);
            setListItem(newResultTv);
        };

        fetchAPI();
    });

    return (
        <div className={cx('wrapper', 'col', 'l-2')}>
            <h3 className={cx('header')}>Top movie rate</h3>
            <div>
                {listItem.map((item) => {
                    const imgLink = imageService(item.poster_path, '200');

                    return (
                        <Link
                            to={configs.routes.movie}
                            key={item.id}
                            className={cx('item')}
                        >
                            <Image
                                className={cx('item-img')}
                                src={imgLink}
                                alt={item.title}
                            />
                            <div className={cx('info')}>
                                <h5 className={cx('name')}>
                                    {item.original_title || item.original_name}
                                </h5>
                                <div className={cx('vote')}>
                                    <span> Star: {item.vote_average}</span>
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className={cx('vote')}>
                                    Vote: {item.vote_count}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

RightSidebar.propTypes = {
    type: PropTypes.string.isRequired,
};
export default RightSidebar;
