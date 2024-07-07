import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import bgcity from '../../assets/bgcity.jpeg';
import car from '../../assets/car.png';
import bgImage2 from '../../assets/bgbridge.jpeg';
import bgImage3 from '../../assets/bgroad.jpeg';

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear'
    };

    return (
        <div className='relative w-full h-auto md:h-[520px] '>
            <Slider {...settings} className='absolute inset-0 '>
                {[bgcity, bgImage2, bgImage3].map((image, index) => (
                    <div key={index} className='w-full h-full '>
                        <div className='relative w-full h-[300px] md:h-[520px]'>
                            <Image src={image} alt={`Background ${index}`}  />
                        </div>
                    </div>
                ))}
            </Slider>
            <div className='absolute inset-0 flex justify-center bg-white/50 dark:bg-gray-800/50 items-center flex-col text-center space-y-5 py-14'>
                <p data-aos='fade-up' data-aos-delay='200' className='text-primary text-xl md:text-3xl font-semibold uppercase'>
                    Book Cab Now
                </p>
                <h1 data-aos='fade-up' data-aos-delay='600' className='tracking-[2px] md:tracking-[8px] text-sm md:text-xl font-bold'>
                    +1 209 660 9405
                </h1>
                <p data-aos='fade-up' data-aos-delay='1000' className='tracking-[2px] md:tracking-[8px] text-sm md:text-xl font-semibold'>
                    www.a1airporter.com
                </p>
                <div data-aos="zoom-in-right" data-aos-duration="1000" className='relative max-h-[260px] md:max-h-[460px] scale-75 md:scale-125 translate-y-10 md:translate-y-0'>
                    <Image src={car} alt='car' layout='fill' objectFit='contain' />
                </div>
            </div>
        </div>
    );
}

export default Hero;