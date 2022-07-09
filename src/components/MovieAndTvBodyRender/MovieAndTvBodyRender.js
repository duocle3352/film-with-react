import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { BodyItem } from '~/components/BodyItem';
import style from './MovieAndTvBodyRender.module.scss';

const cx = classNames.bind(style);
function MovieAndTvBodyRender({ listItem, title }) {
    return (
        <div className={'row'}>
            <h1 className={cx('title', 'l-2', 'l-o-5')}>{title}</h1>
            <ul className={'row'}>
                {listItem.map((item) => {
                    return <BodyItem key={item.id} data={item} large />;
                })}
            </ul>
        </div>
    );
}

MovieAndTvBodyRender.propTypes = {
    listItem: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};

export default MovieAndTvBodyRender;
