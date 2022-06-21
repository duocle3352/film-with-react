import axios from 'axios';

const request = axios.create({
    // baseURL: 'https://api.themoviedb.org/3/',
    baseURL: 'https://api.themoviedb.org/3/',
});

const get = async (path, options = {}) => {
    const response = await request.get(path, options);

    return response.data;
};

export { get };

// https://api.themoviedb.org/3/search/multi?api_key=422c277f59a1913e0290741efbfa04e8&language=en-US&query=home&page=1&include_adult=false
