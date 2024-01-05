import img from '../../Assets/Image2.png';
import { MdArrowForward } from '@react-icons/all-files/md/MdArrowForward';
import { FaGoogle } from '@react-icons/all-files/fa/FaGoogle';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';

const Footer = () => {
    return (
        <>
            <div className="py-20 lg:p-20 mt-28 lg:mt-40 bg-amber-500">
                <div className='flex flex-col lg:flex-row items-center justify-between w-full lg:w-10/12 mx-auto'>
                    <div className='flex flex-col gap-20 w-11/12 lg:w-3/5'>
                        <div className='flex items-center w-full lg:w-10/12 relative'>
                            <input type="text" placeholder="Enter Your Email" className="input font-normal rounded-lg focus:outline-none border-0 lg:rounded-2xl w-full p-8 lg:p-6" />
                            <div className='flex absolute right-2 items-center justify-center gap-3
                            font-bold lg:font-normal text-xl lg:text-lg lg:bg-orange-600 py-1 px-8 rounded-2xl text-orange-500 lg:text-white'>
                                <button>Subscribe</button>
                                <MdArrowForward className='' />
                            </div>
                        </div>

                        <div className='flex lg:flex-row flex-col-reverse items-center justify-between gap-8 lg:gap-4'>
                            <div className='flex flex-col items-center lg:items-start'>
                                <h1 className="font-comfortaa text-4xl lg:text-3xl font-extrabold mb-8">pti.</h1>
                                <p className='font-bold text-xl lg:text-lg'>Copyright©Tripp.All Right Reserved</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaGoogle className='font-bold text-white bg-orange-600 lg:text-orange-600 p-4 lg:p-3 rounded-full h-12 w-12 lg:h-10 lg:w-10 lg:bg-orange-200 text-2xl' />
                                <FaTwitter className='font-bold text-white bg-orange-600 lg:text-orange-600 p-4 lg:p-3 rounded-full h-12 w-12 lg:h-10 lg:w-10 lg:bg-orange-200 text-2xl' />
                                <FaInstagram className='font-bold text-white bg-orange-600 lg:text-orange-600 p-4 lg:p-3 rounded-full h-12 w-12 lg:h-10 lg:w-10 lg:bg-orange-200 text-2xl' />
                            </div>
                        </div>
                    </div>
                    <div className='w-2/5 hidden lg:flex justify-end'>
                        <img className='h-64 w-96' src={img} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;