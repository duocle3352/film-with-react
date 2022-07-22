import classNames from 'classnames/bind';
import configs from '~/configs';
import { Link } from 'react-router-dom';
import { useFetchPopularService } from '~/hook';
import { BodyItem } from '~/components/BodyItem';
import { RightSidebar } from '~/components/RightSidebar';
import style from './Home.module.scss';

const cx = classNames.bind(style);

function Home() {
    const listMoviesItem = useFetchPopularService(configs.filmType.movie).slice(
        0,
        10,
    );
    const listTvItem = useFetchPopularService(configs.filmType.tv).slice(0, 10);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const RenderListHomeItem = ({ title, link, data, type }) => {
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
                <div className={cx('row', 'sm-gutter')}>
                    {data.map((item) => {
                        return (
                            <BodyItem data={item} key={item.id} type={type} />
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <div className={cx('wrapper', 'row')}>
            <RenderListHomeItem
                title="Popular movies"
                link={configs.routes.movie}
                data={listMoviesItem}
                type={configs.filmType.movie}
            />

            <RightSidebar type={configs.filmType.movie} />

            <RenderListHomeItem
                title="Popular TV"
                link={configs.routes.tv}
                data={listTvItem}
                type={configs.filmType.tv}
            />

            <RightSidebar type={configs.filmType.tv} />
        </div>
    );
}

export default Home;
