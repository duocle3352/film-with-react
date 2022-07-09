import classNames from 'classnames/bind';
import configs from '~/configs';
import { Link } from 'react-router-dom';
import { useFetchPopularAPI } from '~/hook';
import { BodyItem } from '~/components/BodyItem';
import { RightSidebar } from '~/components/RightSidebar';
import style from './Home.module.scss';

const cx = classNames.bind(style);

function Home() {
    const listMoviesItem = useFetchPopularAPI('movie').slice(0, 10);
    const listTvItem = useFetchPopularAPI('tv').slice(0, 10);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const RenderListItem = ({ title, link, data }) => {
        return (
            <div className={cx('col', 'l-10')}>
                <div className={cx('header')}>
                    <h1 className={cx('title')}>{title}</h1>
                    <Link
                        className={cx('more')}
                        to={link}
                        onClick={scrollToTop}
                    >
                        See more
                    </Link>
                </div>
                <ul className={cx('list-item', 'row', 'sm-gutter')}>
                    {data.map((item) => {
                        return <BodyItem data={item} key={item.id} />;
                    })}
                </ul>
            </div>
        );
    };

    return (
        <div className={cx('wrapper', 'row')}>
            <RenderListItem
                title="Popular movies"
                link={configs.routes.movie}
                data={listMoviesItem}
            />

            <RightSidebar type="movie" />

            <RenderListItem
                title="Popular TV"
                link={configs.routes.tv}
                data={listTvItem}
            />

            <RightSidebar type="tv" />
        </div>
    );
}

export default Home;
