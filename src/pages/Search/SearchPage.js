import { useEffect, useState } from 'react';
import { searchService } from '~/apiServices';
import Pagination from '~/components/Pagination';
import MovieAndTvBodyRender from '~/components/BodyRender';

function SearchPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [listItem, setListItem] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const results = await searchService('home', currentPage);

            setListItem(results);
        };

        fetchAPI();
    }, [currentPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };

    return (
        <div className="row">
            <MovieAndTvBodyRender listItem={listItem} title="Search result:" />
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

export default SearchPage;
