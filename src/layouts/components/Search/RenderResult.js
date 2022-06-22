import { memo } from 'react';
import SearchResultItems from '~/components/SearchResultItems';

function RenderResult({ data }) {
    console.log(123);
    return (
        <>
            {data.map((result) => (
                <SearchResultItems key={result.id} data={result} />
            ))}
        </>
    );
}

export default memo(RenderResult);
