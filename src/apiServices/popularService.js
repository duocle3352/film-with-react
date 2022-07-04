import * as request from '~/utils/request';

const popularService = async (
    type,
    api_key = '422c277f59a1913e0290741efbfa04e8',
) => {
    const res = await request.get(`${type}/popular`, {
        params: {
            api_key,
        },
    });

    return res.results;
};

export default popularService;
