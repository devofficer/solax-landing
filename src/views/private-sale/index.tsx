import React from "react";

import { Col, Image } from "components";
import { private_sale_list } from "utils";

const PrivateSale = () => {
  const checkAndShowEllipse = (type: number) => {
    if (type === 0) {
      return <div className="absolute w-[241px] h-[241px] -top-[36px] -left-[40px] bg-[#20D2C918] blur-[50px]" />;
    }
    if (type === 1) {
      return (
        <>
          <div className="absolute w-[151px] h-[151px] -top-[43px] left-[24px] bg-[#BAABF920] blur-[50px]" />
          <div className="absolute w-[151px] h-[151px] top-[90px] -right-[13px] bg-[#BAABF920] blur-[50px]" />
        </>
      );
    }
    if (type === 2) {
      return <div className="absolute w-[101px] h-[101px] top-[30px] right-[20px] bg-[#20D2C940] blur-[50px]" />;
    }
  };

  return (
    <>
      <div
        data-aos="fade-in"
        className="pt-[130px] pb-[43px] laptop:pt-[119px] laptop:pb-[40px] uppercase text-center font-bold text-[48px] normal:text-[32px] leading-[60px] normal:leading-[40px]"
      >
        Private Sale
      </div>
      <div className="grid grid-cols-3 normal:grid-cols-1 gap-[23px] laptop:gap-[18px]">
        {private_sale_list.map((private_sale, index) => (
          <Col
            animate="fade-in"
            delay={private_sale.delay}
            key={`private_sale_${index}`}
            className="justify-between pt-[46px] laptop:pt-[30px] pb-[57px] laptop:pb-[40px] px-[24px] rounded-[20px] bg-card_normal"
          >
            <div>
              <p className={`uppercase text-center font-bold text-[32px] laptop:text-[24px] leading-[40px] laptop:leading-[30px]`}>
                {private_sale.title1}
                <br />
                {private_sale.title2}
              </p>
              <p className="pt-[18px] pb-[30px] text-center font-semibold text-[16px] text-label">{private_sale.value}</p>
            </div>
            <div className={`animate-up_back ${private_sale.animationDelay} mt-4 relative self-center ${private_sale.tabletWidth}`}>
              <Image
                src={private_sale.image}
                alt={private_sale.alt}
                width={private_sale.width}
                height={private_sale.height}
                className="z-10"
              />
              {checkAndShowEllipse(private_sale.type)}
            </div>
          </Col>
        ))}
      </div>
    </>
  );
};

export default PrivateSale;
