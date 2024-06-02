import React from 'react'

const Navlinks = () => {
  return (
    <>
      <div className="font-sora flex flex-col justify-around">
        <div className="px-5">
          <div className="text-gray-400 font-weight-100 text-[18px] tracking-wider xl:text-[34px] xl:tracking-[1.4px]">Get in touch </div>
          <ul className="flex flex-col">
            <li>
              <a href="*" act className="font-weight-100 text-[18px] tracking-[1.5px] xl:text-[32px] xl:tracking-[1.3px] text-white">
                info@programmersbucket.com
              </a>
            </li>
            <li>
              <a href="*" className="font-weight-100 text-[18px] tracking-wider xl:text-[32px] xl:tracking-[1.3px]  text-white">+92 123 456789</a>
            </li>
          </ul>
        </div>
        <div className=" social-link py-3 px-5  md:px-5 md:mt-2 ">
          <div className="text-gray-400 font-weight-100 text-[18px] tracking-wider xl:text-[32px] xl:tracking-[1.3px]">Social</div>
          <ul className="md:flex md:justify-between md:flex-col grid grid-cols-2">
            <li>
              <a href="*" className="font-weight-100 text-[18px] tracking-[1.3px] xl:text-[32px] xl:tracking-[1.3px] text-white">linkedin</a>
            </li>
            <li>
              <a href="*" className="font-weight-100 text-[18px] tracking-[1.3px] xl:text-[32px] xl:tracking-[1.3px] text-white">Facebook</a>
            </li>
            <li>
              <a href="*" className="font-weight-100 text-[18px] tracking-[1.3px] xl:text-[32px] xl:tracking-[1.3px] text-white">instagram</a>
            </li>
            <li>
              <a href="*" className="font-weight-100 text-[18px] tracking-[1.3px] xl:text-[32px] xl:tracking-[1.3px] text-white">twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navlinks
