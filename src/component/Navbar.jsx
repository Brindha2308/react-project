import React from 'react'
import { Link } from 'react-scroll'
import { BiRestaurant } from "react-icons/bi"
import Button from '../layout/Button'
//import { Link } from 'react-router-dom'

const Navbar = () => {
    return (


        
        <div className='fixed w-full'>
            <div>
                <div className='flex flex-row justify-between p-5 px-5 md:px-32 bg-[#fdbb4b] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                    <div className='flex flex-row items-center'>
                        <span><BiRestaurant size={32} /></span>
                        <h1 className='text-2xl font-semibold'>Welcome to Danya's Cafe

                        </h1>
                    </div>
                    <nav className='hidden md:flex flex-row items-center gap-8 font-medium text-xl'>
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className=' hover:text-orange-600 transition-all cursor-pointer font-bold'
                        >
                            Home
                        </Link>

                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='hover:text-orange-600 transition-all cursor-pointer font-bold'
                        >
                            About</Link>

                        <Link
                            to="menu"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='hover:text-orange-600 transition-all cursor-pointer font-bold'
                        >
                            Menu
                        </Link>

                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='hover:text-orange-600 transition-all cursor-pointer font-bold'
                        >
                            Contact Us
                        </Link>
                        <Link
                            to="login"
                        >
                        <button className='px-6 py-2 border-2 border-orange-600 rounded-full
             hover:bg-orange-600 font-bold'>Login</button>
                        </Link>
                    </nav>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
