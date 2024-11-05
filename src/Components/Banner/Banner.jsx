import React from 'react';
import bannerImg from '../../assets/banner.jpg';

const Banner = () => {
    return (
        <>
            <div className="relative hero mx-auto rounded-2xl bg-cover bg-center bg-no-repeat">
                <div className="hero-overlay bg-purple-600 rounded-2xl"></div>
                <div className="hero-content text-neutral-content text-center px-6 py-12 md:py-20">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold text-white whitespace-nowrap">
                            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
                        </h1>
                        <p className="mb-8 text-md lg:text-lg text-gray-300 whitespace-nowrap">
                            Find the perfect gadget to elevate your tech experience. From cutting-edge devices <br /> to must-have accessories, we've got you covered.
                        </p>
                        <button className="btn bg-white px-4 py-2 text-lg lg:text-xl text-purple-600 font-medium border-none hover:bg-gray-200 rounded-3xl transition-colors">
                            Shop Now
                        </button>
                    </div>
                </div>
                
            </div>
            {/* Newsletter Section */}
            <div className="relative -mt-16 left-0 right-0 z-20 mx-auto w-10/12 md:w-8/12 border  border-white bg-gray-100 rounded-lg p-6 bg-opacity-50">
            <img src={bannerImg} alt=""
            className="w-full h-72 object-cover rounded-xl"  />
            </div>
        </>
    );
};

export default Banner;
