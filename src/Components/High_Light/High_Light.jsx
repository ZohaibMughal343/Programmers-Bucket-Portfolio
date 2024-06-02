import React from "react";
import CountUp from 'react-countup';

const High_Light = () => {
  return (
    <>
      <div className="w-screen bg-[#FAFAFA] pb-20 Laptop:py-10 Laptop:pb-24">
        <div className="font-bold text-[20px] Laptop:text-[45px] lg:md:text-[26px] text-center mx-auto pt-16 w-72 Laptop:w-[500px]">
          <div className="relative">
            {"why work with us".toUpperCase()}
            <i className="lg:md:w-40 Laptop:w-64 w-24 h-[2px] lg:md:h-[3px] Laptop:h-[5px] absolute bottom-[-10px] left-24 lg:md:left-[65px] Laptop:left-[115px] bg-[#FCBB17]"></i>
          </div>
        </div>
        <div className="w-[330px] md:w-full mx-auto Laptop:pt-7">
          <p className="mt-11 text-center font-[Sora] text-[11px] Laptop:text-[23px] md:text-[12px] lg:text-[14px]">
            Partnering with us means working with trusted{" "}
            <br className="block md:hidden" />
            development company that's with
            <br className="hidden md:block d0" />{" "} 
            you every <br className="block md:hidden" />
            step of way, and beyond.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:md:gap-10 gap-7 Laptop:gap-20 px-1 mobile:px-10 lg:md:px-0 md:w-[700px] lg:w-[900px] Laptop:w-[1200px] Laptop:py-5 mx-auto mt-7">
          <div className="text-center">
            <div className="text-[#FCBB17] text-center font-bold text-[35px] lg:text-[50px] Laptop:text-[82px] md:text-[45px]">
              <CountUp start={1000} end={2016} duration={2.5} enableScrollSpy delay={0.5}/>
            </div>
            <p className="font-[Sora] text-[11px] lg:text-[14px] md:text-[13px] Laptop:text-[22px]">
              year of founding
            </p>
          </div>
          <div className="text-center">
            <div className="text-[#FCBB17] text-center font-bold text-[35px] lg:text-[50px] md:text-[45px] Laptop:text-[82px]">
            <CountUp start={0} end={60} duration={2.5} enableScrollSpy delay={0.5}/>+
            </div>
            <p className="font-[Sora] text-[11px] lg:text-[14px] md:text-[13px] Laptop:text-[22px]">
              teammates
            </p>
          </div>
          <div className="text-center">
            <div className="text-[#FCBB17] text-center font-bold text-[35px] lg:text-[50px] md:text-[45px] Laptop:text-[82px]">
            <CountUp start={0} end={30} duration={2.5} enableScrollSpy delay={0.5}/>+
            </div>
            <p className="font-[Sora] text-[11px] lg:text-[14px] md:text-[13px] Laptop:text-[22px]">
              projects
            </p>
          </div>

          <div className="text-center">
            <div className="text-[#FCBB17] text-center font-bold text-[35px] lg:text-[50px] md:text-[45px] Laptop:text-[82px]">
            <CountUp start={0} end={20} duration={2.5} enableScrollSpy delay={0.5}/>+
            </div>
            <p className="font-[Sora] text-[11px] lg:text-[14px] md:text-[13px] Laptop:text-[22px]">
              clients and partners
            </p>
          </div>
          <div className="text-center">
            <div className="text-[#FCBB17] text-center font-bold text-[35px] lg:text-[50px] md:text-[45px] Laptop:text-[82px]">
            <CountUp start={0} end={10} duration={2.5} enableScrollSpy delay={0.5}/>
            </div>
            <p className="font-[Sora] text-[11px] lg:text-[14px] md:text-[13px] Laptop:text-[22px]">
              average years of developers
              <br />
              experience
            </p>
          </div>
          <div className="text-center">
            <div className="text-[#FCBB17] text-center font-bold text-[35px] lg:text-[50px] md:text-[45px] Laptop:text-[82px]">
            <CountUp start={0} end={2} duration={2.5} enableScrollSpy delay={0.5}/>.6
            </div>
            <p className="font-[Sora] text-[11px] lg:text-[14px] md:text-[13px] Laptop:text-[22px]">
              average duration of collaboration with clients
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default High_Light;
