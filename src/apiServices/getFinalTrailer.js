import * as request from '~/utils/request';

const getFinalTrailer = async (
    type,
    id,
    api_key = '422c277f59a1913e0290741efbfa04e8',
    language = 'en-US',
) => {
    const res = await request.get(`${type}/${id}/videos`, {
        params: {
            api_key,
            language,
        },
    });

    return res.results[0];
};

export default getFinalTrailer;

// https://api.themoviedb.org/3/movie/438148/videos?api_key=422c277f59a1913e0290741efbfa04e8&language=en-US
