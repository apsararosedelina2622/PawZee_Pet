import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

const ErrorPageBody = () => {

    return (
        <>
            <div className="text-center lg:pt-36 pt-28 mx-5">
                <p className="font-bold lg:text-5xl md:text-5xl text-2xl text-transparent bg-clip-text w-fit mx-auto bg-gradient-to-r from-[#6a70d1] to-purple-400 md:h-[10vh]">Oops! Page Not Found</p>
                <p className="text-gray-600 text-lg pt-3">
                    Sorry, the page you’re looking for doesn’t exist or might have been moved.
                </p>
                <img src={assets.error_img} alt="Error-Cat-Dog-Image" className="mx-auto lg:w-1/4 md:w-1/2 w-2/3" />

                <Link to='/home'>
                    <button className="px-6 py-3 mb-14 text-white font-semibold rounded-lg bg-gradient-to-r from-[#6a70d1] to-purple-400 hover:bg-gradient-to-l">
                        Go to Home
                    </button>
                </Link>
            </div>
        </>
    );
};

export default ErrorPageBody;
