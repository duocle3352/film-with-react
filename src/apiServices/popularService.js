import * as request from '~/utils/request';

const popularService = async (
    type,
    page = 1,
    api_key = '422c277f59a1913e0290741efbfa04e8',
    language = 'en-US',
) => {
    const res = await request.get(`${type}/popular`, {
        params: {
            api_key,
            language,
            page,
        },
    });

    return res.results;
};

export default popularService;

// https://api.themoviedb.org/3/tv/popular?api_key=422c277f59a1913e0290741efbfa04e8&language=en-US&page=1
