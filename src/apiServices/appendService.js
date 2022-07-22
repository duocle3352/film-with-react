import * as request from '~/utils/request';

const appendService = async (
    type,
    id,
    api_key = '422c277f59a1913e0290741efbfa04e8',
    append_to_response = 'credits,videos,similar',
) => {
    const res = await request.get(`${type}/${id}`, {
        params: {
            api_key,
            append_to_response,
        },
    });
    return res;
};

export default appendService;
// https://api.themoviedb.org/3/movie/100402?api_key=422c277f59a1913e0290741efbfa04e8&append_to_response=credits,videos,similar
