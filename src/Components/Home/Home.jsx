import { useEffect, useState } from 'react';
import Banner from "./Banner";
import Popular from "./Popular";
import Recommended from "./Recommended";
import axios from 'axios';

const Home = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10');
                setData(response.data.Items);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filterPopularData = data?.filter(item => {
        return item.IsPopular === true
    });
    const filterRecommendedData = data?.filter(item => {
        return item.IsRecommended === true
    });

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>
            <Banner />
            <div className='flex flex-col gap-12'>
                <Popular filterPopularData={filterPopularData} title='Popular' />
                <Recommended filterRecommendedData={filterRecommendedData} title='Recommended' />
            </div>
        </>
    );
};

export default Home;