import classNames from 'classnames/bind';
import { useFetchPopularAPI } from '~/hook';
import { RenderBodyItem } from '~/components/RenderBodyItem';
import style from './Movies.module.scss';

const cx = classNames.bind(style);

function Movies() {
    const listMovies = useFetchPopularAPI('movie');

    return (
        <div className={cx('wrapper', 'row')}>
            <h1 className={cx('title', 'l-12')}>List Movies</h1>
            <ul className={cx('list-item', 'row')}>
                {listMovies.map((item) => {
                    return <RenderBodyItem data={item} key={item.id} />;
                })}
            </ul>
        </div>
    );
}

export default Movies;
