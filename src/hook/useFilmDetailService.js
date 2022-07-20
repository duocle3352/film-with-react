import { useState, useEffect } from 'react';
import { filmDetailService } from '~/apiServices';

const useFilmDetailService = (filmType, filmId) => {
    const [currentFilm, setCurrentFilm] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await filmDetailService(filmType, filmId);
            setCurrentFilm(result);
        };

        fetchAPI();
    }, [filmType, filmId]);

    return currentFilm;
};

export default useFilmDetailService;
