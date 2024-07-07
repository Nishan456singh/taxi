
import React from 'react'
import Slider from 'react-slick'
import BgImage from '../../assets/testimonial.webp'
import Image from 'next/image'

const bgStyle = {
    backgroundImage: `url(${BgImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
}

const TestimonialData = [
    {
        id: 1,
        name: 'John Doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://images.pexels.com/photos/212286/pexels-photo-212286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        id: 2,
        name: 'Nishan Singh',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://images.pexels.com/photos/212286/pexels-photo-212286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        id: 3,
        name: 'Sidhu Moosewala',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://images.pexels.com/photos/212286/pexels-photo-212286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        id: 4,
        name: 'sidhu moosewala',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://images.pexels.com/photos/212286/pexels-photo-212286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        id: 5,
        name: 'Jatt Da Muqabla',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://images.pexels.com/photos/212286/pexels-photo-212286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        id: 6,
        name: 'gucci gang',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://images.pexels.com/photos/212286/pexels-photo-212286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
]

const Testimonials = () => {

    // slider config
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ],
    }

    return (
        <div style={bgStyle}>
            <div className='bg-white/80 dark:bg-gray-800/90 py-14 dark:text-white'>
                <div className='container'>
                    {/* header section */}
                    <div data-aos='fade-up' className='text-center mb-10'>
                        <h1 className='text-4xl font-bold'>Testimonials</h1>
                    </div>
                    {/* testimonial cards section */}
                    <div data-aos='zoom-in'>
                        <Slider {...settings}>
                            {TestimonialData.map(({ id, name, text, image }) => {
                                return (
                                    <div key={id} className='my-6'>
                                        <div className='flex flex-col gap-6 bg-white dark:bg-dark relative
                                         py-8 px-6 mx-4 rounded-3xl shadow-lg'>
                                            {/* content section */}
                                            <div className='flex flex-col items-center gap-4'>
                                                <div className='space-y-3'>
                                                    <p className='text-xs'>{text}</p>
                                                </div>
                                            </div>
                                            {/* image section */}
                                            <div className='flex items-center gap-4'>
                                                <img src={image} alt={name}
                                                    className='rounded-full w-16 h-16 ' />
                                                <div>
                                                    <h1 className='text-xl font-bold text-black/60 dark:text-primary font-cursive'>
                                                        {name}</h1>
                                                    <p className='text-sm font-bold text-black/45 dark:text-white'>
                                                        Developer
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
