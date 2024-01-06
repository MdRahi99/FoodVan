import { useContext } from 'react';
import Banner from "./Banner";
import Popular from "./Popular";
import Recommended from "./Recommended";
import Loader from '../Shared/Loader';
import { DataContext } from '../../Contexts/DataProvider';

const Home = () => {

    const {data, loading, error} = useContext(DataContext);

    const filterPopularData = data?.filter(item => {
        return item.IsPopular === true
    });
    const filterRecommendedData = data?.filter(item => {
        return item.IsRecommended === true
    });

    if (loading) {
        return <Loader />;
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