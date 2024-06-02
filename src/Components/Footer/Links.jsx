import React from 'react'
import footerArrow from '../Assets/footerArrows.svg'


const Links = ({heading, text}) => {
    const array = text;
  return (
    <div>
      <div className='xl:pr-2'>
        <ul className='text-[#fff]'>
            <li className=' text-[18px] Laptop:text-[21px]  font-[600]'>{heading}</li>
            {array.map((value, index) => (
              <li key={index} className='flex items-center text-[17.5px] Laptop:text-[20px]  pt-5 Laptop:pt-6' ><span className='inline-block h-[15px] w-[15px]'><img src={footerArrow} alt="Image" /></span><div className='pl-2 pt-1 font-extralight tracking-wider'>{value}</div></li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Links
