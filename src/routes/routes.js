import configs from '~/configs';
import Home from '~/pages/Home';
import Movies from '~/pages/Movies';
import TvSeries from '~/pages/TvSeries';
import Search from '~/pages/Search';

// layout
// import { HeaderLayout } from '~/components/layouts';

const publicRoutes = [
    { path: configs.routes.home, element: Home },
    { path: configs.routes.movie, element: Movies },
    { path: configs.routes.tv, element: TvSeries },
    { path: configs.routes.search, element: Search },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
