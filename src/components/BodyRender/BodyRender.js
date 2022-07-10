import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { BodyItem } from '~/components/BodyItem';
import style from './BodyRender.module.scss';

const cx = classNames.bind(style);
function MovieAndTvBodyRender({ listItem, title }) {
    return (
        <>
            <h1 className={cx('title', 'l-12')}>{title}</h1>
            <ul className={'row'}>
                {listItem.map((item) => {
                    return <BodyItem key={item.id} data={item} large />;
                })}
            </ul>
        </>
    );
}

MovieAndTvBodyRender.propTypes = {
    listItem: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};

export default MovieAndTvBodyRender;
