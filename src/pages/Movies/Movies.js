import { useState } from 'react';
import { useFetchPopularService } from '~/hook';
import configs from '~/configs';
import Pagination from '~/components/Pagination';
import { PageTitle } from '~/components/PageTitle';
import { BodyItem } from '~/components/BodyItem';

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
            <PageTitle title="Movies" />
            <div className={'row'}>
                {listMovies.map((item) => {
                    return <BodyItem key={item.id} data={item} large />;
                })}
            </div>
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
