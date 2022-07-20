import { useState } from 'react';
import { useFetchPopularService } from '~/hook';
import Pagination from '~/components/Pagination';
import configs from '~/configs';
import { BodyRender } from '~/components/BodyRender';

function Movies() {
    const [currentPage, setCurrentPage] = useState(1);

    const listMovies = useFetchPopularService(
        configs.filmType.movie,
        currentPage,
    );
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };
    return (
        <div className="row">
            <BodyRender listItem={listMovies} title="Movies" />
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
