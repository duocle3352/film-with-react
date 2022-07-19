import * as request from '~/utils/request';

const getSimilarFilm = async (
    type,
    id,
    api_key = '422c277f59a1913e0290741efbfa04e8',
    language = 'en-US',
    page = 1,
) => {
    const res = await request.get(`${type}/${id}/similar`, {
        params: {
            api_key,
            language,
        },
    });

    return res.results;
};

export default getSimilarFilm;

// https://api.themoviedb.org/3/movie/438148/similar?api_key=422c277f59a1913e0290741efbfa04e8&language=en-US&page=1
