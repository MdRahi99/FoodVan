import img from '../../Assets/Image1.png';

const Banner = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row items-center justify-between lg:bg-amber-500 lg:p-20 p-2 rounded-3xl gap-12 lg:gap-0 lg:relative lg:my-36'>
                <div className='flex flex-col text-center lg:text-left gap-6 p-3 lg:gap-10 w-full lg:w-1/2'>
                    <h1 className='text-3xl lg:text-5xl lg:text-white font-bold lg:font-semibold opacity-90'>Deliver Food to Your Door Step!</h1>
                    <p className='text-lg lg:text-2xl text-gray-400 font-semibold lg:text-gray-100 lg:opacity-80'>Authentic Food,Quick Service,Fast Delivery</p>
                </div>
                <div className='lg:absolute lg:bottom-0 lg:right-10 bg-orange-500 opacity-90 rounded-3xl lg:bg-transparent'>
                    <img className='h-96 w-full' src={img} alt="" />
                </div>
            </div>
        </>
    );
};

export default Banner;