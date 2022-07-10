import { useState } from 'react';
import { useFetchPopularAPI } from '~/hook';
import Pagination from '~/components/Pagination';
import MovieAndTvBodyRender from '~/components/BodyRender';

function Movies() {
    const [currentPage, setCurrentPage] = useState(1);

    const listMovies = useFetchPopularAPI('movie', currentPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };
    return (
        <div className="row">
            <MovieAndTvBodyRender listItem={listMovies} title="Movies" />
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

export default Movies;
