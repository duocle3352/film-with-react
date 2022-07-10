import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import Image from '~/Image';
import { imageService } from '~/apiServices';
import style from './BodyItem.module.scss';

const cx = classNames.bind(style);

function BodyItem({ data, large }) {
    const imgLink = imageService(data.poster_path, '300');
    const classes = cx('item-control', { large });

    return (
        <li key={data.id} className={cx('item', 'col', 'l-2-4')}>
            <div className={classes}>
                <Image
                    className={cx('item-img')}
                    src={imgLink}
                    alt={data.title}
                />
                <button className={cx('play-btn')}>
                    <FontAwesomeIcon icon={faPlay} />
                </button>
            </div>
            <h4 className={cx('item-name')}>
                {data.original_title || data.original_name || data.name}
            </h4>
        </li>
    );
}

BodyItem.propTypes = {
    data: PropTypes.object.isRequired,
    imgClassName: PropTypes.string,
};

export default BodyItem;
