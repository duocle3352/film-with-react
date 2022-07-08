import { useState, useEffect } from 'react';
import { popularService } from '~/apiServices';

const useFetchAPI = (type) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await popularService(type);

            setData(res);
        };

        fetchAPI();
    }, [type]);

    return data;
};

export default useFetchAPI;
