import React from "react";
import Box from "./Box";

const Services = () => {
  const contentArray = [
    {
      heading: "Technical Complexity",
      text: "The development process of the product is made more complex, time-consuminng , and expensive by complex design specification and advanced features.",
    },
    {
      heading: "Third-Party Integrations",
      text: "Software development costs are also affected by third-party systems like payment gateway, maps, ERPs, and CRMs.",
    },
    {
      heading: "Features & Functionalities",
      text: "The most important cost driver is the number of features you want Screens, buttonas fields involved, and the amount of logic required can change costs dractically.",
    },
    {
      heading: "Custom Design",
      text: "Custom user interface are rather complex to design and implement accurately. Therefore, they often cause the cost of software development to increase.",
    },
  ];
  return (
    <>
      <div
        id="SERVICES"
        className="flex flex-col font-[Poppins] w-full bg-[#FCBB17] pb-20 xl:pb-28"
      >
        <div className="uppercase text-2xl Laptop:text-4xl text-[#111111] my-14 Laptop:my-20 font-semibold mx-auto">
          <div className="relative">
            Our Services
            <div className="absolute -bottom-2 w-full">
              <i className="block h-[3px] w-[67%] mx-auto bg-[#111111]"></i>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="grid md:grid-cols-2 gap-7 Laptop:gap-10 mx-auto">
            {contentArray.map((value, index) => (
              <Box key={index} heading={value.heading} text={value.text} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
