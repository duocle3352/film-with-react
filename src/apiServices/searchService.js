import * as request from '~/utils/request';

const searchService = async (
    query,
    api_key = '422c277f59a1913e0290741efbfa04e8',
    language = 'en-US',
    page = '1',
    include_adult = 'false',
) => {
    const res = await request.get(`search/multi`, {
        params: {
            api_key,
            language,
            query,
            page,
            include_adult,
        },
    });

    return res.results;
};
export default searchService;
