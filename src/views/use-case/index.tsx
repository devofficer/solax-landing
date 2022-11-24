import React from "react";

import { Image } from "components";
import { use_case_list } from "utils";

const UseCase = () => {
  return (
    <div data-aos="fade-down">
      <div className="mt-[154px] tablet:mt-[100px] pb-[102px] tablet:pb-[82px] uppercase text-center font-bold text-[48px] leading-[60px] normal:text-[30px] normal:leading-[40px]">
        Use-Cases
      </div>
      <div className="grid grid-cols-2 tablet:grid-cols-1 gap-x-[23px] laptop:gap-x-[18px] gap-y-[99px] laptop:gap-y-[90px]">
        {use_case_list.map((use_case, index) => (
          <div
            key={`use_case_${index}`}
            data-aos="fade-up"
            data-aos-delay={use_case.delay}
            className={`relative min-h-[334px] pt-[96px] pl-[39px] pr-[26px] pb-[23px] desktop:px-[15px] desktop:pb-[16px] text-black rounded-[20px] ${use_case.box_shadow} ${use_case.bg_color}`}
          >
            <div className="uppercase font-bold text-[32px] leading-[40px] desktop:text-[24px] desktop:leading-[30px]">
              <p>{use_case.label}: </p>
              <p>{use_case.title}</p>
            </div>
            <div className="pt-[11px] font-medium text-[16px] leading-[31px]">{use_case.details}</div>
            <div
              className={`animate-right_back ${use_case.animationDelay} absolute -top-[80px] desktop:-top-[100px] right-[41px] laptop:w-[124px] laptop:-top-[50px] normal:right-[14px]`}
            >
              <Image src={use_case.image} alt={use_case.alt} width={use_case.width} height={use_case.height} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCase;
