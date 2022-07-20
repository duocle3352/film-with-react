import { useStoreContext, useDebounce, useSearchService } from '~/hook';
import { actions } from '~/stores';
import Pagination from '~/components/Pagination';
import { BodyRender } from '~/components/BodyRender';

function SearchPage() {
    const [state, dispatch] = useStoreContext();
    const { searchValue, currentPage } = state;
    const debounce = useDebounce(searchValue, 800);
    const listItem = useSearchService(debounce, currentPage);

    const handlePageChange = (pageNumber) => {
        dispatch(actions.setCurrentPage(pageNumber));
        window.scrollTo(0, 0);
    };

    return (
        <div className="row">
            <BodyRender
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
