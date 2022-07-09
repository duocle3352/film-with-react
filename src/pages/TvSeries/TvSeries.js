import { useFetchPopularAPI } from '~/hook';
import MovieAndTvBodyRender from '~/components/MovieAndTvBodyRender';

function TvSeries() {
    const listTvSeries = useFetchPopularAPI('tv');

    return <MovieAndTvBodyRender listItem={listTvSeries} title="TV Series" />;
}

export default TvSeries;
