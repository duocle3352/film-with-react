import Home from '~/pages/Home';
import Movies from '~/pages/Movies';
import TvSeries from '~/pages/TvSeries';
import Search from '~/pages/Search';

// layout
import { HeaderLayout } from '~/components/layouts';

const publicRoutes = [
    { path: '/', element: Home },
    { path: '/movies', element: Movies },
    { path: '/tv', element: TvSeries },
    { path: '/search', element: Search },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
