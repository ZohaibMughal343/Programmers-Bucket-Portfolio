import React from "react";
import img1 from "../Assets/Mountains.png";
import Icon2 from "../Assets/Icon2.svg";
const AboutSection = () => {
  return (
    <>
      <div id="ABOUT_US" className="w-full py-5 Laptop:py-14">
        <div className="font-bold px-5 text-[135%] md:text-[23px] lg:text-[25px] xl:text-[30px] Laptop:text-[40px] pt-14 text-center mx-auto">
          {"We have been visionaries since day one".toUpperCase()}
        </div>
        <div className="container py-14 md:px-10 lg:px-24 xl:px-32 xl:py-16 mx-auto">
          <div className="grid md:grid-cols-2 gap-7 sm:gap-0 mx-auto">
            <div className="relative mx-auto my-auto -translate-y-5">
              <div className="absolute top-0 right-0">
                <img src={Icon2} alt="Image" className="Laptop:w-[50px]" />
              </div>
              <div className="w-72 lg:w-80 xl:w-96 Laptop:w-[500px] mx-auto">
                <div className="relative">
                  <img
                    src={img1}
                    className="w-[90%] rounded-tr-[90px] Laptop:rounded-tr-[150px] rounded-[10px]"
                    alt="Image"
                  />
                  <i className="z-[-1] w-[80px] h-[80px] Laptop:w-[120px] Laptop:h-[120px]  rounded-tr-[23px] rounded-bl-[23px] absolute left-[65%] bottom-0 translate-x-[20px] translate-y-[20px]  md:left-[65%] md:translate-x-[18px] md:translate-y-[28px] lg:left-[70%] lg:translate-x-[15px] lg:translate-y-[23px] Laptop:left-[75%] Laptop:translate-x-[0px] Laptop:translate-y-[38px] bg-[#FCBB17] opacity-50"></i>
                </div>
              </div>
            </div>
            <div className="text-[14px] md:text-[12px] md:leading-normal md:px-9 lg:text-[14px] lg:px-12 xl:text-[17px] xl:px-[42px] Laptop:text-[22px] Laptop:px-[70px] p-10 md:p-0 leading-6 font-[Sora]">
              Lorem, ipsum dolor sit amet consectetur adipisi
              cing elit. Est
              quaerat ipsum, quam distinctio animi minus provident similique
              voluptates id, totam, nihil repellendus. Est quaerat ipsum, quam
              distinctio animi minus provident similique voluptates id, totam,
              nihil repellendus. Quaerat in voluptas unde nesciunt placeat
              consectetur quas. <br />
              <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Labore nam corrupti, doloribus vel nesciunt quaerat distinctio
              officiis nihil alias enim dolore 1500.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
