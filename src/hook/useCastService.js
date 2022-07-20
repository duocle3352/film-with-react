import { useState, useEffect } from 'react';
import { getCastService } from '~/apiServices';

const useCastService = (filmType, filmId) => {
    const [casts, setCast] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await getCastService(filmType, filmId);
            const newResult = result.slice(0, 6);

            setCast(newResult);
        };

        fetchAPI();
    }, [filmType, filmId]);

    return casts;
};

export default useCastService;
