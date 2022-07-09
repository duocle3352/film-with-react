import { useFetchPopularAPI } from '~/hook';
import MovieAndTvBodyRender from '~/components/MovieAndTvBodyRender';

function Movies() {
    const listMovies = useFetchPopularAPI('movie');

    return <MovieAndTvBodyRender listItem={listMovies} title="Movies" />;
}

export default Movies;
