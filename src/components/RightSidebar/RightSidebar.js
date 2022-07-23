import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import Image from '~/Image';
import { imageService } from '~/apiServices';
import { useStoreContext, useTopRateService } from '~/hook';
import { setCurrentFilmId, setCurrentFilmType } from '~/stores/actions';
import style from './RightSidebar.module.scss';

const cx = classNames.bind(style);

function RightSidebar({ type }) {
    const [, dispatch] = useStoreContext();
    const listItem = useTopRateService(type);
    return (
        <div className={cx('wrapper', 'col', 'l-2')}>
            <h3 className={cx('header')}>Top movie rate</h3>
            <div>
                {listItem.map((item) => {
                    const imgLink = imageService(item.poster_path, '200');

                    return (
                        <Link
                            to={`/@${item.id}`}
                            key={item.id}
                            className={cx('item')}
                            onClick={() => {
                                window.scrollTo(0, 0);
                                dispatch(setCurrentFilmId(item.id));
                                dispatch(setCurrentFilmType(type));
                            }}
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
