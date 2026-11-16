import React from 'react'
import logo from "../assets/logo.svg"
import arrow from "../assets/arrow.svg"

const Navbar = () => {
    return (


        <nav className="flex justify-between items-center px-16 py-5 bg-white">

            <div className="flex items-center gap-2">

                <img src={logo} alt="" className='w-8 h-8' />


                <h2 className="text-2xl font-bold">
                    QuickBlog
                </h2>
            </div>

            <button className=" flex items-center gap-2 bg-blue-700 text-[#FFFFFF] px-10 py-3 rounded-full hover:text-[#5044E5]">


                login
                <img src={arrow} alt="" />

            </button>
        </nav>
    )
}

export default Navbar
