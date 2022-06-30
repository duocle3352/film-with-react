import * as request from '~/utils/request';

const trendingService = async (
    api_key = '422c277f59a1913e0290741efbfa04e8',
) => {
    const res = await request.get('/trending/all/day', {
        params: {
            api_key,
        },
    });

    return res.results;
};

export default trendingService;
