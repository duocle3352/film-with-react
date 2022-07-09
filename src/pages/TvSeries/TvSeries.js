import { useState } from 'react';
import { useFetchPopularAPI } from '~/hook';
import Pagination from '~/components/Pagination';
import MovieAndTvBodyRender from '~/components/MovieAndTvBodyRender';

function TvSeries() {
    const [currentPage, setCurrentPage] = useState(1);

    const listTvSeries = useFetchPopularAPI('tv', currentPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };

    return (
        <div className="row">
            <MovieAndTvBodyRender listItem={listTvSeries} title="TV Series" />
            <Pagination
                totalCount={100}
                currentPage={currentPage}
                pageSize={1}
                onPageChange={handlePageChange}
                siblingCount={5}
            />
        </div>
    );
}

export default TvSeries;
