"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import DarkMode from './DarkMode';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu';
import Image from 'next/image';
import lightLogo from '../../assets/lightLogo.png';
import darkLogo from '../../assets/darkLogo.png';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';


export const Navlinks = [
    {
        id: 1,
        name: 'Home',
        link: '/'
    },
    {
        id: 2,
        name: 'About',
        link: '/about'
    },
    {
        id: 3,
        name: 'Fleet',
        link: '/fleet'
    },
    {
        id: 4,
        name: 'Services',
        link: '/services'
    },
    {
        id: 5,
        name: 'Reservations',
        link: '/contact'
    },
    {
        id: 6,
        name: 'Pricing',
        link: '/pricing'
    },
]
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { theme } = useTheme(); 
    const [logoImage, setLogoImage] = useState()
    const pathname = usePathname();

    useEffect(() => {
        // Listen for theme changes
        if (theme === 'dark') {
            setLogoImage(lightLogo); // Set to dark mode logo
        } else {
            setLogoImage(darkLogo); // Set to light mode logo
        }
    }, [theme]);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className='relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300'>
            <div className='container py-2 md:py-0'>
                <div className='flex items-center justify-between'>
                    <Image src={logoImage} alt="logo" width={120} height={16} />
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-6'>
                            {Navlinks.map(({ id, name, link }) => {
                                const isActive = pathname === link
                                return (
                                    <li key={id} className='py-4'>
                                        <Link href={link} className={`${isActive ? 'bg-neutral-500 dark:text-black' : ''}text-lg font-medium text-black dark:text-white py-2 px-2 rounded-md hover:bg-neutral-700 duration-300`}>
                                            {name}
                                        </Link>
                                    </li>
                                )
                            })}
                            <DarkMode />
                        </ul>
                    </div>
                    <div className='md:hidden flex items-center gap-4'>
                        <DarkMode />
                        {
                            showMenu ? (
                                <HiMenuAlt1
                                    onClick={toggleMenu}
                                    className='cursor-pointer transistion-all'
                                    size={30}
                                />
                            ) : (
                                <HiMenuAlt3
                                    onClick={toggleMenu}
                                    className='cursor-pointer transistion-all'
                                    size={30}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
            <ResponsiveMenu showMenu={showMenu} Navlinks={Navlinks} />
        </nav>
    )
}


export default Navbar