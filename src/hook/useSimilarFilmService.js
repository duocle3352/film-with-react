import { useState, useEffect } from 'react';
import { getSimilarFilm } from '~/apiServices';

const useSimilarFilmService = (filmType, filmId) => {
    const [similarFilms, setSimilarFilms] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await getSimilarFilm(filmType, filmId);

            setSimilarFilms(result);
        };

        fetchAPI();
    }, [filmType, filmId]);

    return similarFilms;
};

export default useSimilarFilmService;
