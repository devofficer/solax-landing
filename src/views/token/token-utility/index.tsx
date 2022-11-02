import React from "react";

import { EffectCards, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Col, Row } from "components";
import { token_utility_list } from "utils";

const TokenUtility = () => {
  return (
    <div
      data-aos="fade-in"
      data-aos-delay="600"
      className="py-[33px] pr-[33px] pl-[36px] normal:px-[15px] normal:pb-[14px] rounded-[20px] bg-card_gradient5 shadow-card_box5"
    >
      <div className="pb-[26px] uppercase font-bold text-black text-[32px] leading-[40px] normal:text-[24px] normal:leading-[30px]">
        Token Utilities
      </div>
      <Row className="justify-between space-x-[1px] font-medium text-[16px] leading-[150%]">
        <p className="uppercase text-black max-w-[130px] tablet:min-w-[100px] w-full">Staking Pool Rewards</p>
        <p className="max-w-[320px] text-right">20% of all trading fees will be distributed towards various $SAX staking pools.</p>
      </Row>
      <Row className="pt-[23px] pb-[14px] justify-between space-x-[1px] font-medium text-[16px] leading-[150%]">
        <p className="pt-[98px] max-w-[160px] mobile:max-w-[110px] uppercase text-black">Swap Discounts For $SAX Stakers</p>

        <Swiper
          modules={[EffectCards, Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
          cardsEffect={{ slideShadows: false, rotate: false, perSlideOffset: 25 }}
          grabCursor={true}
          effect="cards"
          className="h-auto w-[260px]"
        >
          <Row>
            {token_utility_list.map((token_utility, index) => (
              <SwiperSlide key={`swiper_slide_${index}`}>
                <Col className="w-[113px] mobile:w-[85px] space-y-1">
                  <div
                    className={`pl-[16px] pt-[2px] uppercase font-medium text-[16px] leading-[31px] rounded-[10px_10px_0px_0px] ${token_utility.bg}`}
                  >
                    {token_utility.title}
                  </div>
                  <div className={`pl-[18px] mobile:pl-[8px] py-[16px] rounded-[0px_0px_10px_10px] ${token_utility.bg}`}>
                    <p className="font-medium mobile:text-center text-[13px] leading-[192.5%]">
                      {">"}
                      {token_utility.value} $SAX
                    </p>
                    <p className="pl-[8px] pt-[26px] font-bold mobile:text-center text-[20px] leading-[192.5%]">
                      {token_utility.percentage}
                    </p>
                  </div>
                </Col>
              </SwiperSlide>
            ))}
          </Row>
        </Swiper>
      </Row>
      <Row className="pt-[17px] justify-between space-x-[1px] font-medium text-[16px] leading-[150%]">
        <p className="uppercase text-black">Future Token Utility</p>
        <p className="max-w-[320px] text-right">SOLA-X DAO Governance</p>
      </Row>
    </div>
  );
};

export default TokenUtility;
