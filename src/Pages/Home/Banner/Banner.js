import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className='banner-img'>
            <div className='grid grid-cols-1 py-60 px-60'>
                {/* <div>
                    <img src={image} alt="" srcset="" />
                </div> */}
                <div className='banner-text p-20'>
                    <h4 className=' text-center text-white'>Welcome to</h4>
                    <h1 className='text-blue-600 text-center text-6xl font-bold'>Happy Cures</h1>
                    <h2 className='text-2xl font-semibold'>We also have a ton of fun in the process</h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;