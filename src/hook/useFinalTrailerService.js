import { useState, useEffect } from 'react';
import { getFinalTrailer } from '~/apiServices';

const useFinalTrailerService = (filmType, filmId) => {
    const [trailerKey, setTrailerKey] = useState('');

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await getFinalTrailer(filmType, filmId);

            setTrailerKey(result.key);
        };

        fetchAPI();
    }, [filmType, filmId]);

    return trailerKey;
};

export default useFinalTrailerService;
