import { HeaderLayout } from '~/layouts';
import configs from '~/configs';
import Home from '~/pages/Home';
import Movies from '~/pages/Movies';
import TvSeries from '~/pages/TvSeries';
import Search from '~/pages/Search';
import Info from '~/pages/Info';

const publicRoutes = [
    { path: configs.routes.home, element: Home },
    { path: configs.routes.movie, element: Movies },
    { path: configs.routes.tv, element: TvSeries },
    { path: configs.routes.search, element: Search, layout: HeaderLayout },
    { path: configs.routes.info, element: Info, layout: HeaderLayout },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
