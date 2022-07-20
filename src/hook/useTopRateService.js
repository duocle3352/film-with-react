import { useState, useEffect } from 'react';
import { topRateService } from '~/apiServices';

const useTopRateService = (type) => {
    const [listItem, setListItem] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const resultTv = await topRateService(type);
            const newResultTv = resultTv.slice(0, 10);
            setListItem(newResultTv);
        };

        fetchAPI();
    }, []);

    return listItem;
};

export default useTopRateService;
