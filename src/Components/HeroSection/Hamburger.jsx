import React from 'react'
import Links from './Links'
import Navlinks from './Navlinks'
import Footer from './Footer'
import Logo from '../Assets/Logo.svg'
import IconToggle from '../Assets/Icon-Toggle1.svg'

const Hamburger = ({ toggle, handleToggle1 }) => {
    return (
        <div className={`duration-500 fixed left-0 top-0 w-full h-screen bg-[#111111] ${!toggle ? "z-[250] opacity-100" : "-z-10 opacity-0"}`}>
            <div className='w-full min-h-[75px] flex justify-between p-5 px-7 md:px-16 lg:px-28 xl:px-40 xl:py-7 Laptop:px-60 bg-white'>
                <div className='Logo w-[180px] md:w-[200px] xl:w-[280px] Laptop:w-[350px]'>
                    <img src={Logo} alt='Image' className='big-Screen:w-[100%] big-Screen:h-[100%]' />
                </div>
                <div className='flex md:w-[270px] lg:w-[290px] xl:w-[380px] justify-between'>
                    <button type='button' className='hidden md:block my-auto d0 md:w-[138px] md:h-[43px] lg:w-[153px] lg:h-[48px] xl:w-[200px] xl:h-[64px] Laptop:w-[220px] Laptop:h-[70px] rounded-[50px] bg-[#FCBB17] font-[Inter] xl:text-[24px]'>Let's Talk</button>
                    <div className='cursor-pointer md:flex md:justify-start md:w-[100px]'>
                        <img src={IconToggle} alt="Image" onClick={handleToggle1} />
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='flex flex-col md:flex-row justify-between w-full pl-5 gap-4 pt-[25px] md:px-12 md:pl-20 lg:px-28 lg:pl-32 xl:px-44  xl:py-20 Laptop:px-60'>
                    <div className='font-[sans-serif] font-semibold'>
                        <Links handleToggle1={handleToggle1} />
                    </div>
                    <div className=''>
                        <Navlinks />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Hamburger
