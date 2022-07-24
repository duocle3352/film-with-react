import { useState } from 'react';
import { useFetchPopularService } from '~/hook';
import configs from '~/configs';
import Pagination from '~/components/Pagination';
import { PageTitle } from '~/components/PageTitle';
import { BodyItem } from '~/components/BodyItem';

function TvSeries() {
    const [currentPage, setCurrentPage] = useState(1);

    const listTvSeries = useFetchPopularService(
        configs.filmType.tv,
        currentPage,
    );
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };

    return (
        <div className="row">
            <PageTitle title="TV Series" />
            <div className={'row'}>
                {listTvSeries.map((item) => {
                    return (
                        <BodyItem
                            key={item.id}
                            data={item}
                            type={configs.filmType.tv}
                            large
                        />
                    );
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

export default TvSeries;
