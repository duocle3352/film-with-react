import { useState, useEffect } from 'react';
import { trendingService } from '~/apiServices';

const useTrendingService = () => {
    const [sliderData, setSliderData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await trendingService();
            const result = res.slice(0, 10);

            setSliderData(result);
        };

        fetchAPI();
    }, []);

    return sliderData;
};

export default useTrendingService;
