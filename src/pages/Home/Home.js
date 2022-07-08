import classNames from 'classnames/bind';
import configs from '~/configs';
import { Link } from 'react-router-dom';
import { useFetchPopularAPI } from '~/hook';
import { RenderBodyItem } from '~/components/RenderBodyItem';
import { RightSidebar } from '~/components/RightSidebar';
import style from './Home.module.scss';

const cx = classNames.bind(style);

function Home() {
    const listMoviesItem = useFetchPopularAPI('movie').slice(0, 10);
    const listTvItem = useFetchPopularAPI('tv').slice(0, 10);

    const Header = ({ title, to }) => (
        <div className={cx('header')}>
            <h1 className={cx('title')}>{title}</h1>
            <Link className={cx('more')} to={to}>
                See more
            </Link>
        </div>
    );

    return (
        <div className={cx('wrapper', 'row')}>
            <div className={cx('col', 'l-10')}>
                <Header title={'Popular movies'} to={configs.routes.movie} />
                <ul className={cx('list-item', 'row')}>
                    {listMoviesItem.map((item) => {
                        return <RenderBodyItem data={item} key={item.id} />;
                    })}
                </ul>
            </div>

            <RightSidebar type="movie" />

            <div className={cx('col', 'l-10')}>
                <Header title={'Popular TV'} to={configs.routes.tv} />
                <ul className={cx('list-item', 'row')}>
                    {listTvItem.map((item) => {
                        return <RenderBodyItem data={item} key={item.id} />;
                    })}
                </ul>
            </div>

            <RightSidebar type="tv" />
        </div>
    );
}

export default Home;
