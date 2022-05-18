import Home from '~/pages/Home';
import Movies from '~/pages/Movies';
import Register from '~/pages/Register';

// layout
import { HeaderLayout } from '~/components/layouts';

const publicRoutes = [
    { path: '/', elment: Home },
    { path: '/movies', elment: Movies },
    { path: '/register', elment: Register, layout: HeaderLayout },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
