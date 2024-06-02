import React from 'react'
import Slider from 'react-slick'
import './slick.css'
import './slick-theme.css'
import TeamMember1 from '../Assets/TeamMember1.svg'
import TeamMember2 from '../Assets/TeamMember2.svg'
import TeamMember3 from '../Assets/TeamMember3.svg'
import TeamMember4 from '../Assets/TeamMember4.svg'

const OurDeveloper = () => {
    const Data = [{name: 'Dmitry Blyschyk', img: TeamMember1, review: 'CEO & founder'}, {name: 'Andrey Martsinkevich', img: TeamMember2, review: 'Senior Software Developer'}, {name: 'Sergey Prontsevich', img: TeamMember3, review: 'Senior Software Developer'},{name: 'Denis Karpuk', img: TeamMember4, review: 'Senior Software Developer'}]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint : 425,
                settings : {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        ]
    }
  return (
    <>
         <div id="PORTFOLIO" className="w-full md:lg:pb-10 lg:pb-16">
         <div className="font-bold text-[20px] lg:md:text-[26px] Laptop:text-[38px] text-center mx-auto pt-16 w-72 Laptop:w-[330px]">
          <div className="relative">
            {"our developers".toUpperCase()}
            <div className="absolute -bottom-2 w-full">
              <i className="block h-[3px] w-[35%] lg:w-[42%] Laptop:w-[60%] Laptop:h-[4px] mx-auto bg-[#FCBB17]"></i>
            </div>
          </div>
        </div>
        <div className='carousal mobile:w-[400] Laptop:w-[1350px] md:w-[740px] lg:w-[900px] xl:w-[1100px] h-[450px] m-auto md:mt-10 lg:mt-20 py-16 Laptop:my-40  md:px-[20px] lg:px-[15px] xl:px-[20px] overflow-x-hidden'>
                <Slider {...settings}>
                {Data.map((d) => {
                    return (
                        <div className='h-80 text-black rounded px-[38px] mobile:px-[70px] md:px-[12px] lg:px-[16px] xl:px-5'>
                            <div className='rounded bg-[#f8f7f7] flex justify-center items-center w-[300px] mobile:w-[300px] md:w-auto'>
                                <div className='relative h-56 w-44 mobile:h-60 mobile:w-48 md:h-36 md:w-36 lg:h-48 lg:w-44 rounded'>
                                <img src={d.img}  className='absolute top-[-37px] mobile:top-[-34px] md:top-[-14px] lg:top-[-31px] xl:top-[-47px] md:h-40 md:w-36 lg:h-56 lg:w-44 xl:h-60 xl:w-48 rounded'/>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-4 py-4 md:px-3 lg:px-0 bg-[#F7F6F6] border-t-2 rounded w-[300px] mobile:w-[300px] md:w-auto'>
                                <p className='text-md font-bold mobile:text-[20px] md:text-[11.5px] lg:text-[14px] xl:text-[16px]  font-[Inter] mb-[-10px]'>{d.name}</p>
                                <p className='font-[Inter] mobile:text-[19px] md:text-[10.5px] lg:text-[12px] xl:text-[14px]  text-center lg:pb-4'>{d.review}</p>
                            </div>
                        </div>
                    )
                })}
                </Slider>
        </div>
        </div>
    </>
  )
}

export default OurDeveloper
