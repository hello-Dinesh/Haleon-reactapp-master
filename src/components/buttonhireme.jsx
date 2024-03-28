import React from "react";

export const ButtonHireMe = () => {
  return (
    <div className="inline-flex flex-col items-center justify-center gap-[10px] px-[32px] py-[16px] relative bg-[#ffba19] rounded-[5px]">
      <div className="relative w-[102px] h-[18px] mr-[-2.00px]">
        <div className="absolute h-[18px] top-0 left-0 [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[15px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Contact Me
        </div>
        <img className="absolute w-[16px] h-[16px] top-px left-[84px]" alt="Frame" src="frame.svg" />
      </div>
    </div>
  );
};