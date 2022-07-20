import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Image from '~/Image';
import { useStoreContext } from '~/hook';
import { setCurrentFilmId, setCurrentFilmType } from '~/stores/actions';
import { imageService } from '~/apiServices';
import style from './BodyItem.module.scss';

const cx = classNames.bind(style);

function BodyItem({ data, large, type }) {
    const [state, dispatch] = useStoreContext();

    const imgLink = imageService(data.poster_path, '300');
    const classes = cx('item-control', { large });

    const handleClick = () => {
        window.scrollTo(0, 0);
        dispatch(setCurrentFilmId(data.id));
        dispatch(setCurrentFilmType(type));
    };

    return (
        <Link
            className={cx('item', 'col', 'l-2-4')}
            key={data.id}
            onClick={handleClick}
            to={`/@${data.id}`}
        >
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
        </Link>
    );
}

BodyItem.propTypes = {
    data: PropTypes.object.isRequired,
    imgClassName: PropTypes.string,
};

export default BodyItem;
