import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Navlinks } from './Navbar'
import Link from 'next/link'
import Image from 'next/image'
import lightLogo from '../../assets/lightLogo.png'


const ResponsiveMenu = ({ showMenu }) => {
    return (
        <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex
               flex-col justify-between bg-white dark:bg-dark dark:text-white px-8 pb-6 pt-16 text-black 
               duration-300 md:hidden rounded-r-xl shadow-md h-screen w-[75%]`}>
            <div>
                <div className='flex  items-center justify-start gap-3'>
                    {/* <Link href='/' legacyBehavior>
                            <a>
                                <Image src={lightLogo} alt="logo" className="h-auto rounded-full" />
                            </a>
                        </Link> */}
                </div>
                <nav className='mt-12'>
                    <ul>
                        {
                            Navlinks.map(({ id, name, link }) => {
                                return (
                                    <li key={id} className='py-4'>
                                        <Link href={link} className='text-xl font-medium text-black
                                         dark:text-white duration-300'>
                                            {name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
            <div className='footer'>
                <h1>Developed by <a href="https://www.nishansingh.pro" className='text-blue-500'>
                    Nishan Singh
                </a>{" "}</h1>
            </div>
        </div>
    )
}

export default ResponsiveMenu
