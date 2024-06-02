import React from 'react'
import Logo from '../Assets/Logo.svg'
import Img from '../Assets/thanku-bg.svg'
import { Link } from 'react-router-dom'
import AnimatedCursor from 'react-animated-cursor'
const Thankyou = () => {
    return (
        <>
            <div className={`fixed left-0 top-0 w-full h-screen bg-[#ffffff]`}>
                <div className='w-full min-h-[75px] flex justify-between p-5 px-7 md:px-16 lg:px-28 xl:px-40 xl:py-7 Laptop:px-60 bg-white'>
                    <div className='Logo w-[180px] lg:w-[210px] xl:w-[400px]'>
                        <img src={Logo} alt='Image' className='xl:h-[80px]' />
                    </div>
                    <div className='hidden md:flex md:w-[180px] lg:w-[200px] justify-between'>
                        <button type='button' className='break-remove my-auto d0 md:w-[138px] md:h-[43px] lg:w-[153px] lg:h-[48px] Laptop:w-[229px] Laptop:h-[72px] rounded-[50px] bg-[#FCBB17] font-[Inter] Laptop:text-[24px]'>Let's Talk</button>
                    </div>
                </div>
                {/* --------------------------------------------------------------------------------------------------- */}
                <div className='flex md:px-16 lg:px-28 xl:px-40 xl:py-7 Laptop:px-60'>
                    <div className='grid grid-cols-1 md:grid-cols-2 m-auto px-8 md:px-0 my-[50px] w-full xl:h-[650px]'>
                        <div>
                            <p className='text-[40px] leading-[52px] md:text-[32px] md:leading-[41px] Laptop:text-[90px] Laptop:leading-[100px] lg:text-[46px] lg:leading-[60px] xl:text-[65px] xl:leading-[80px] tracking-wide text-[#302d2d] font-[Poppins] font-bold'>Thank you for reaching out to us!</p>
                            <p className='text-[#302d2d] text-[14px] md:text-[11px] Laptop:text-[26px] lg:text-[14px] xl:text-[20px] font-semibold font-[Sora] mt-3 lg:mt-5'>One of our consultants will be getting in touch with you shortly to discuss your needs and necessities, to understand how we can be helpful for your project and what is required from your side to move forward and define the next steps for future cooperation.</p>
                            <Link to="/" className='flex mt-5 h-[35px] md:w-[220px] md:h-[40px] lg:w-[256px] lg:h-[50px] xl:w-[360px] xl:h-[64px] Laptop:w-[450px] Laptop:h-[90px]  font-[Poppins] text-[14px] xl:text-[23px] Laptop:text-[28px] lg:text-[16px] font-bold bg-[#FCBB17]'><span className='m-auto'>{('Check out our Portfolio').toUpperCase()}</span></Link>
                        </div>
                        <div className='hidden md:block Laptop:flex Laptop:justify-end'>
                            <img src={Img} alt='Image' className='Laptop:h-[500px]' />
                        </div>
                    </div>
                </div>
                <AnimatedCursor
                    innerSize={23}
                    outerSize={23}
                    color="255, 180, 19"
                    outerAlpha={0.2}
                    innerScale={0.8}
                    outerScale={3.5}
                    clickables={[
                        "a",
                        'input[type="text"]',
                        'input[type="email"]',
                        'input[type="number"]',
                        'input[type="submit"]',
                        'input[type="image"]',
                        "label[for]",
                        "select",
                        "textarea",
                        "button",
                        ".link",
                        ".swiper-pagination-bullet",
                    ]}
                />
            </div>

        </>
    )
}

export default Thankyou
