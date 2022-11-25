import React from "react";

import { Col, Row } from "components";
import { general_info_list } from "utils";

const GeneralInfo = () => {
  return (
    <div
      data-aos="fade-in"
      data-aos-delay="300"
      className="py-[33px] pr-[48px] pl-[40px] normal:px-[15px] normal:pb-[14px] rounded-[20px] bg-card_gradient2 shadow-card_box2"
    >
      <div className="pb-[26px] uppercase font-bold text-black text-[32px] leading-[40px] normal:text-[24px] normal:leading-[30px]">
        General Info
      </div>
      <Col className="space-y-[10px]">
        {general_info_list.map((general_info, index) => (
          <Row key={`general_info_${index}`} className="justify-between space-x-[6px]  font-medium text-[16px] leading-[31px]">
            <p className="text-black uppercase">{general_info.title}</p>
            {general_info.path ? (
              <a href={general_info.path} target="_blank" rel="noopener noreferrer">
                <div className="flex flex-row border-solid border-2 rounded-full px-3 text-[14px] ">
                  <div className="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>

                  <span>{general_info.value}</span>
                </div>
              </a>
            ) : (
              <p>{general_info.value}</p>
            )}
          </Row>
        ))}
      </Col>
    </div>
  );
};

export default GeneralInfo;
