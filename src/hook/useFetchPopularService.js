import { useState, useEffect } from 'react';
import { popularService } from '~/apiServices';

const useFetchAPI = (type, page) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await popularService(type, page);

            setData(res);
        };

        fetchAPI();
    }, [type, page]);

    return data;
};

export default useFetchAPI;
