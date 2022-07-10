import { useEffect, useState } from 'react';
import { searchService } from '~/apiServices';
import { useStoreContext, useDebounce } from '~/hook';
import { actions } from '~/stores';
import Pagination from '~/components/Pagination';
import MovieAndTvBodyRender from '~/components/BodyRender';

function SearchPage() {
    const [listItem, setListItem] = useState([]);
    const [state, dispatch] = useStoreContext();
    const { searchValue, currentPage } = state;
    const debounce = useDebounce(searchValue, 800);

    useEffect(() => {
        if (!debounce.trim()) {
            setListItem([]);
            return;
        }
        const fetchAPI = async () => {
            const results = await searchService(debounce, currentPage);

            setListItem(results);
        };

        fetchAPI();

        // hide search result
        dispatch(actions.setShowSearchResult(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounce, currentPage]);

    const handlePageChange = (pageNumber) => {
        dispatch(actions.setCurrentPage(pageNumber));
        window.scrollTo(0, 0);
    };

    return (
        <div className="row">
            <MovieAndTvBodyRender
                listItem={listItem}
                title={`Search result: ${searchValue}`}
            />
            {debounce && (
                <Pagination
                    totalCount={100}
                    currentPage={currentPage}
                    pageSize={1}
                    onPageChange={handlePageChange}
                    siblingCount={5}
                />
            )}
        </div>
    );
}

export default SearchPage;
