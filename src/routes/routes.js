import config from '~/configs';
import Home from '~/pages/Home';
import Movies from '~/pages/Movies';
import TvSeries from '~/pages/TvSeries';
import Search from '~/pages/Search';

// layout
// import { HeaderLayout } from '~/components/layouts';

const publicRoutes = [
    { path: config.routes.home, element: Home },
    { path: config.routes.movie, element: Movies },
    { path: config.routes.tv, element: TvSeries },
    { path: config.routes.search, element: Search },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
