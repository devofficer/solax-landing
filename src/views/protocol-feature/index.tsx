import React from "react";

import { Col, Image } from "components";
import { feature_list } from "utils";

const ProtocolFeature = () => {
  const checkAndShowEllipse = (type: number) => {
    if (type === 0) {
      return <div className="absolute w-[153px] h-[153px] -top-[66px] -left-[80px] bg-[#20D2C911] blur-[50px]" />;
    }
    if (type === 1) {
      return (
        <>
          <div className="absolute w-[151px] h-[151px] -top-[33px] left-[39px] bg-[#BAABF920] blur-[50px]" />
          <div className="absolute w-[151px] h-[151px] top-[140px] -right-[43px] bg-[#BAABF920] blur-[50px]" />
        </>
      );
    }
    if (type === 2) {
      return <div className="absolute w-[127px] h-[127px] top-[70px] right-[30px] bg-[#20D2C940] blur-[50px]" />;
    }
  };

  return (
    <div data-aos="fade-down">
      <p className="mt-[176px] tablet:mt-[100px] pb-[43px] tablet:pb-[40px] uppercase text-center font-bold text-[48px] leading-[50px] normal:text-[30px] normal:leading-[40px]">
        Protocol Features
      </p>
      <div className="grid grid-cols-2 normal:grid-cols-1 gap-[23px] laptop:gap-[18px]">
        {feature_list.map((feature, index) => (
          <Col
            animate="fade-up"
            delay={feature.delay}
            key={`feature_${index}`}
            className="justify-between pt-[46px] px-[29px] desktop:pt-[30px] desktop:px-[14px] rounded-[20px] bg-card_normal"
          >
            <div>
              <p className="uppercase font-bold text-[32px] leading-[40px] laptop:text-[24px] laptop:leading-[30px]">{feature.title}</p>
              <p className="pt-[18px] font-medium text-[16px] leading-[31px] laptop:text-[14px] laptop:leading-[192.5%]">
                {feature.details}
              </p>
            </div>
            <div className="relative self-center pt-[44px] pb-[73px] laptop:px-[40px] laptop:pt-[23px] laptop:pb-[40px]">
              <div className={`animate-up_back ${feature.animationDelay} normal:w-[167px]`}>
                <Image src={feature.image} alt={feature.alt} width={feature.width} height={feature.height} />
              </div>
              {checkAndShowEllipse(feature.type)}
            </div>
          </Col>
        ))}
      </div>
    </div>
  );
};

export default ProtocolFeature;
