import { useState, useEffect } from 'react';
import { searchService } from '~/apiServices';

const useSearchService = (value, page = '1') => {
    const [listItem, setListItem] = useState([]);

    useEffect(() => {
        if (!value.trim()) {
            setListItem([]);
            return;
        }
        const fetchAPI = async () => {
            const results = await searchService(value, page);

            setListItem(results);
        };

        fetchAPI();
    }, [value, page]);

    return listItem;
};

export default useSearchService;
