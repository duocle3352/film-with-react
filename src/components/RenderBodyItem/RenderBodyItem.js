import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import Image from '~/Image';
import { imageService } from '~/apiServices';
import style from './RenderBodyItem.module.scss';

const cx = classNames.bind(style);

function RenderBodyItem({ data, imgClassName }) {
    // const imgClassName = {cx('item-img') }
    const imgLink = imageService(data.poster_path, '300');

    return (
        <li key={data.id} className={cx('item', 'col', 'l-2-4')}>
            <div className={cx('item-control')}>
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
                {data.original_title || data.original_name}
            </h4>
        </li>
    );
}

export default RenderBodyItem;
