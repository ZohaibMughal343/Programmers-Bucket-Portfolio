import React from 'react'
import Logo from '../Assets/Logo.svg'
import Social1 from '../Assets/SocialMediaIcon/Social-1.svg'
import Social2 from '../Assets/SocialMediaIcon/Social-2.svg'
import Social3 from '../Assets/SocialMediaIcon/Social-3.svg'
import Links from './Links'
const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='w-full lg:py-[50px] lg:px-[115px] xl:px-[220px] Laptop:px-[280px] xl:py-[60px] bg-[#111111]'>
                <div className='flex justify-between'>
                    <div className='w-[250px] h-[10%]'><img src={Logo} alt="Image" /></div>
                    <div>
                        <ul className='flex justify-between w-[150px]'>
                            <li><img src={Social1} alt="Image" /></li>
                            <li><img src={Social2} alt="Image" /></li>
                            <li><img src={Social3} alt="Image" /></li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-between pt-[40px] font-[Inter]'>
                    <Links heading={"Core expertise"} text={["Healthcare", "Education"]} />
                    <Links heading={"Development services"} text={["Web", "Mobile", "Cloud Native"]} />
                    <Links heading={"Recruiting services"} text={["Team Augmentation", "Dedicated Team", "For developers"]} />
                    <Links heading={"Additional services"} text={["Startup Development", "Consulting"]} />
                    <Links heading={"Information"} text={["About Us", "Blog", "Portfolio", "Privacy Policy"]} />
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
