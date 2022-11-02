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
          <Row key={`general_info_${index}`} className="justify-between space-x-[6px] uppercase font-medium text-[16px] leading-[31px]">
            <p className="text-black">{general_info.title}</p>
            {general_info.path ? (
              <a href={general_info.path} target="_blank" rel="noopener noreferrer">
                {general_info.value}
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
