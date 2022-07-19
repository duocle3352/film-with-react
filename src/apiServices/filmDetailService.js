import * as request from '~/utils/request';

const filmDetailService = async (
    type,
    id,
    api_key = '422c277f59a1913e0290741efbfa04e8',
    language = 'en-US',
) => {
    const res = await request.get(`${type}/${id}`, {
        params: {
            api_key,
            language,
        },
    });

    return res;
};

export default filmDetailService;
// https://api.themoviedb.org/3/movie/453395?api_key=422c277f59a1913e0290741efbfa04e8&language=en-US
