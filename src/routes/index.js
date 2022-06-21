import Home from '~/pages/Home';
import Movies from '~/pages/Movies';
import TvSeries from '~/pages/TvSeries';
import Search from '~/pages/Search';

// layout
import { HeaderLayout } from '~/components/layouts';

const publicRoutes = [
    { path: '/', elment: Home },
    { path: '/movies', elment: Movies },
    { path: '/tv', elment: TvSeries },
    { path: '/search', elment: Search },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
