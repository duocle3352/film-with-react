import { useStoreContext, useDebounce, useSearchService } from '~/hook';
import { actions } from '~/stores';
import Pagination from '~/components/Pagination';
import { PageTitle } from '~/components/PageTitle';
import { BodyItem } from '~/components/BodyItem';

function SearchPage() {
    const STORAGE_DEBOUNCE = 'storage-debounce';
    const [state, dispatch] = useStoreContext();
    const { searchValue, currentPage } = state;
    const debounce = useDebounce(searchValue, 800);

    if (debounce) {
        sessionStorage.setItem(STORAGE_DEBOUNCE, JSON.stringify(debounce));
    }

    const newDebounceValue = JSON.parse(
        sessionStorage.getItem(STORAGE_DEBOUNCE),
    );

    const listItem = useSearchService(newDebounceValue, currentPage);

    const handlePageChange = (pageNumber) => {
        dispatch(actions.setCurrentPage(pageNumber));
        window.scrollTo(0, 0);
    };

    return (
        <div className="row">
            <PageTitle title={`Search result: ${newDebounceValue}`} />
            <div className={'row'}>
                {listItem.map((item) => {
                    return (
                        <BodyItem
                            key={item.id}
                            data={item}
                            type={item.media_type}
                            large
                        />
                    );
                })}
            </div>
            {newDebounceValue && (
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
