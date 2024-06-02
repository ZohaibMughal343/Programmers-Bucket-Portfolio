import React from "react";
import Laptop from "../Assets/Laptop.svg";

const MockUp = ({ color }) => {
  return (
    <>
      <div
        className={`w-[300px] h-[300px] md:w-[300px] md:h-[290px] lg:w-[360px] lg:h-[350px] Laptop:w-[450px] Laptop:h-[440px] rounded-[20px] flex`}
        style={{ background: color }}
      >
        <div className="overflow-hidden w-[250px] md:w-[270px] md:h-[200px] Laptop:w-[340px] Laptop:h-[250px] m-auto">
          <img src={Laptop} alt="Image" />
        </div>
      </div>
    </>
  );
};

export default MockUp;
