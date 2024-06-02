import React, { useState } from 'react'
import Hamburger from './Hamburger';
import Logo from '../Assets/Logo.svg'
import IconToggle from '../Assets/Icon-Toggle.svg'
import Img from '../Assets/coding_animation.svg'
import { ReactTyped, Typed } from "react-typed";

const HeroSection = () => {
    const [toggle, setToggle] = useState(true)
    const handleToggle = () => {
        setToggle(false);
    }
    const handleToggle1 = () => {
        setToggle(true);
    }
    return (
        <>
            <div id='HOME' className='w-full'>
                <div className='w-full min-h-[75px] flex justify-between bg-[#FFF9E8] p-5 px-7 md:px-16 lg:px-28 xl:px-40 xl:py-7 Laptop:px-60'>
                    <div className='Logo w-[180px] md:w-[200px] xl:w-[280px] Laptop:w-[350px]'>
                        <img src={Logo} alt='Image' />
                    </div>
                    <div className='cursor-pointer md:flex md:justify-start md:w-[100px]'>
                        <img src={IconToggle} alt="Image" onClick={handleToggle} />
                    </div>
                </div>
                <Hamburger toggle={toggle} handleToggle1={handleToggle1} />
                <div className='w-full flex bg-[#FFF9E8] Laptop:pb-28'>
                    <div className='md:mt-10'>
                        <div className='flex flex-col md:flex-row px-8 pb-10 md:px-16 lg:px-28 xl:px-40 xl:py-7 Laptop:px-60 mx-auto'>
                            <div className='w-full flex flex-col  mb-10 md:mb-0 xl:mt-5'>
                                <div className='font-[Inter] font-weight-800 text-[34px] md:text-[32px] lg:text-[38px] xl:text-[50px] Laptop:text-[75px]'>We <ReactTyped className='text-[#FCBB17]' strings={["Strategize", "Design", "Develop", "Deliver"]} typeSpeed={100} loop={true} backSpeed={70} /><br /> Impactful Digital Solutions</div>
                                <p className='font-[Sora] my-6 md:my-4 md:text-[12px] lg:text-[14px] xl:text-[18px] Laptop:text-[25px] Laptop:my-8'>Programmers Bucket is a software development company
                                    that has been working with successful startups
                                    worldwide to turn ideas into sustainable businesses.</p>
                                <button className='w-[136px] h-[39px] text-[14px] font-[Inter] font-bold md:w-[136px] md:h-[39px] md:text-[13px] lg:w-[152px] lg:h-[42px] xl:w-[160px] xl:h-[45px] Laptop:w-[248px] Laptop:h-[70px] Laptop:text-[21px] bg-[#FCBB17]'>CONTECT US</button>
                            </div>
                            <div className='w-[90%] xl:w-[85%]'>
                                <img src={Img} alt="Image" className='pl-2 md:pl-0' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
