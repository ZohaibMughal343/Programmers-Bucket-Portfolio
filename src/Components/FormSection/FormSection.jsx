import React, { useState } from "react";

const FormSection = () => {
  const [formToggle, setFormToggle] = useState(false);
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Company, setCompany] = useState('')
  const [Select, setSelect] = useState('')
  const [Comment, setComment] = useState('')
  const handleName = (val) => {
    setName(val);
  }
  const handleEmail = (val) => {
    setEmail(val);
  }
  const handleCompany = (val) => {
    setCompany(val);
  }
  const handleSelect = (val) => {
    setSelect(val);
  }
  const handleComment = (val) => {
    setComment(val);
  }
  // const validate = () => {
  //   if (Name && Email && Company)
  //     return false
  //   else
  //     return true
  // }
  const handleFormToggle = () => {
    if (formToggle) setFormToggle(false);
    else setFormToggle(true);
  };
  return (
    <>
      <div className="w-full bg-[#fafafa] flex flex-col Laptop:py-12 Laptop:pb-20">
        <div className="font-[Inter] font-extrabold mx-auto my-20 text-[22px] md:text-[27px] Laptop:text-[40px] text-center">
          <div className="relative">
            READY TO GET STARTED?
            <div className="absolute -bottom-2 w-full">
              <i className="block h-[3px] w-[35%] lg:w-[42%] Laptop:w-[40%] Laptop:h-[4px] mx-auto bg-[#FCBB17]"></i>
            </div>
          </div>
          <p className="mt-10 font-[Inter] font-normal text-[18px] Laptop:text-[26px] Laptop:leading-8 text-slate-500" >Get in touch and our team will be right <br className="Laptop:block" />with you !</p>
        </div>
        <form
          method="GET"
          action="/Thankyou"
          className="w-[335px] mobile:w-[360px] md:w-[85vw] lg:w-[80vw] xl:w-[70vw] lg:min-h-[550px] Laptop:w-[70vw] Laptop:h-[850px] bg-[#ffffff] mx-auto shadow-md p-7 md:p-8 py-10 lg:px-12 xl:p-16 Laptop:p-24 text-slate-500 text-md font-[Sora]"
        >
          <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-20 pt-2 pb-10 lg:pb-14 Laptop:mb-10">
            <div className="relative pb-12 md:pb-0 ">
              <input
                type="text"
                required
                value={Name}
                onChange={(e) => handleName(e.currentTarget.value)}
                className="h-[30px] Laptop:h-[48px] outline-none border-b-[2px] border-0 Laptop:text-[28px] border-slate-150 w-full"
              />
              <div className="place font-[Inter] Laptop:text-[27px]">
                Name <span style={{ color: "red" }}>*</span>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                required
                value={Email}
                onChange={(e) => handleEmail(e.currentTarget.value)}
                className="h-[30px] Laptop:h-[48px] outline-none border-b-[2px] border-0 Laptop:text-[28px] border-slate-150 w-full"
              />
              <div className="place font-[Inter] Laptop:text-[27px]">
                Email <span style={{ color: "red" }}>*</span>
              </div>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-20 pt-2 pb-10 lg:pb-14 Laptop:mb-10">
            <div className="relative pb-12 md:pb-0">
              <input
                type="text"
                required
                value={Company}
                onChange={(e) => handleCompany(e.currentTarget.value)}
                className="h-[30px] Laptop:h-[48px] outline-none border-b-[2px] border-0 Laptop:text-[28px] border-slate-150 w-full"
              />
              <div className="place font-[Inter] Laptop:text-[27px]">
                Company <span style={{ color: "red" }}>*</span>
              </div>
            </div>
            <div className="relative w-full pb-7 md:pb-0">
              <select
                required
                name=""
                id=""
                value={Select}
                onChange={(e) => handleSelect(e.currentTarget.value)}
                className="h-[30px] Laptop:h-[48px] outline-none absolute bottom-0 border-b-[2px] border-0 Laptop:text-[28px] border-slate-150 text-slate-400 w-full"
              >
                <option></option>
                <option>Budget</option>
                <option>Good</option>
              </select>
              <div className="place font-[Inter] Laptop:text-[27px]">
                How can we help you? <span style={{ color: "red" }}>*</span>
              </div>
            </div>
          </div>
          <div className="w-full pt-2 pb-7">
            <div className="relative">
              <textarea
                name=""
                id=""
                cols="30"
                rows="6"
                value={Comment}
                onChange={(e) => handleComment(e.currentTarget.value)}
                className="resize-none outline-none border-b-[2px] border-0 Laptop:text-[28px] border-slate-150 w-full"
                required
              ></textarea>
              <div className="place font-[Inter] Laptop:text-[27px]">
                Message <span style={{ color: "red" }}>*</span>
              </div>
            </div>
          </div>
          <div className="w-full pt-2 flex">
            <div className="ml-auto w-[330px] Laptop:w-[525px] flex justify-between pt-3">
              <button className="hover:bg-[#1E2637] hover:text-white w-[126px] Laptop:w-[246px] h-[40.5px] Laptop:h-[77px] md:w-[140px] md:h-[45px] font-[Inter] text-[13px] Laptop:text-[22px] text-[#1E2637] font-bold border border-slate-500">
                {"Cancel".toUpperCase()}
              </button>
              <button type="submit" className="w-[126px] Laptop:w-[246px] h-[40.5px] Laptop:h-[77px] md:w-[160px] md:h-[45px] font-[Inter] text-[13px] Laptop:text-[22px] text-[#1E2637] font-bold bg-[#FCBB17]" >
              {"Send Message".toUpperCase()}
              </button>
            </div>
          </div>
        </form>
        <div className="h-16"></div>
      </div>
    </>
  );
};

export default FormSection;
