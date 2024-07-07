import React from 'react'
import Image from 'next/image'
import car from '../../assets/car.png'
import BgImage from '../../assets/bgbridge.jpeg'
import van from '../../assets/van.webp'
import pacifica from '../../assets/pacifica.png'

import Link from 'next/link'


const ServicesData = [
    {
        id: 1,
        img: car,
        name: 'Economy Class',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.',
        aosDelay: "100",
    },
    {
        id: 2,
        img: van,
        name: 'Standard Class',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.',
        aosDelay: "300",
    },
    {
        id: 3,
        img: pacifica,
        name: 'Business Class',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.',
        aosDelay: "500",
    },
]

const bgStyle = {
    backgroundImage: `url(${BgImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "320px",
    width: "100vw",
    };

const BestCabs = () => {
    return (
        <div className='overflow-hidden bg-white dark:bg-dark text-black  dark:text-white'>
            <div style={bgStyle} />
            <div className='container'>
                {/* header title section  */}
                <div data-aos='fade-up' className='text-center mt-10 mb-10'>
                    <h1 className='text-4xl font-bold text-gray-800 dark:text-white'>Choose Best Cab</h1>
                </div>
                {/* best cab card section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 p-10 place-items-center'>
                    {ServicesData.map(({ id, img, name, description, aosDelay }) => {
                        return (
                            <div
                                key={id}
                                data-aos="fade-up"
                                data-aos-delay={aosDelay}
                                className='group rounded-2xl bg-white dark:bg-black hover:!bg-primary
                                shadow-xl duration-200 max-w-[300px] relative'>
                                {/* image section */}
                                <div className='h-[110px]'>
                                    <Image src={img} alt='' className='max-w-[200px] block mx-auto transform
                                    -translate-y-20 group-hover:scale-110 group-hover:translate-x-4 duration-300'/>
                                </div>
                                {/* text content section */}
                                <div className='text-center p-4 space-y-4'>
                                    <h1 className='text-xl font-bold'>{name}</h1>
                                    <p className='text-gray-500 group-hover:text-black duration-300 text-sm line-clamp-2'>{description}</p>
                                    <p className='text-primary text-2xl font-bold group-hover:text-black'>
                                        $/km
                                    </p>
                                    <button className='bg-black dark:bg-white dark:text-black text-white px-4 py-2 rounded-lg'>
                                        <Link href='/contact'>Book Now</Link>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BestCabs
