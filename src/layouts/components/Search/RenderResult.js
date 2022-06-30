import { memo } from 'react';
import SearchResultItems from '~/components/SearchResultItems';

function RenderResult({ data }) {
    return (
        <>
            {data.map((result) => (
                <SearchResultItems key={result.id} data={result} />
            ))}
        </>
    );
}

export default memo(RenderResult);
