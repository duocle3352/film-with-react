import { faClock, faEarthAsia, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './SearchResultItems.module.scss';

const cx = classNames.bind(style);

function SearchResultItems() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('sticker')}
                src="https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa64a035a12448_nguoi-nhen-xa-nha.jpg"
                alt="ten phim"
            />
            <div>
                <h4 className={cx('vn-name')}>Kỵ sĩ mặt trăng</h4>
                <h5 className={cx('eng-name')}>Moon Knight</h5>
                <div className={cx('rate')}>
                    <span>
                        <FontAwesomeIcon icon={faEarthAsia} />
                        UA
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faClock} />
                        2009
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faEye} />
                        122.334
                    </span>
                </div>
                <p className={cx('description')}>
                    Chiến thắng 1 giải BAFTA cùng rất nhiều giải thưởng lớn khác, ít ai có thể ngờ rằng Mặt Trăng lại
                    làm được điều đó khi bộ phim sản xuất bởi điện ảnh Anh này
                </p>
            </div>
        </div>
    );
}

export default SearchResultItems;
