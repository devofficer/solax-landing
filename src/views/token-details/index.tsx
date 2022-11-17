import React from "react";
import { useRouter } from "next/router";

import { Button, Image, Row } from "components";

import SAX_TOKEN from "assets/images/sax_token@4x.png";
import SAX_TOKEN_DETAILS from "assets/images/sax_token_details@4x.png";

const TokenDetails = () => {
  const router = useRouter();

  return (
    <div data-aos="fade-up" className="relative mobile:pb-[100px]">
      <div className="w-[86%] tablet:w-[92%] tablet mt-[206px] pt-[50px] pl-[55px] pb-[57px] laptop:pl-[30px] mobile:pb-[142px] rounded-[20px] bg-card_normal">
        <div className="space-y-[68px]">
          <Row className="relative z-10 items-center space-x-[17px] tablet:space-x-[14px]">
            <div className="flex px-[20px] py-[14px] rounded-full bg-white bg-opacity-10 ">
              <Image src={SAX_TOKEN} alt="SAX Token" width={34} height={46} />
            </div>
            <p className="uppercase font-bold text-[48px] leading-[60px] normal:text-[32px] normal:leading-[40px]">SAX Token</p>
          </Row>
          <Button action={() => router.push("/sax")}>Details</Button>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="900"
          className="animate-up_back absolute -top-[120px] laptop:-top-[40px] mobile:top-[160px] -right-[60px] desktop:right-0 mobile:-right-[10px] laptop:w-[350px] mobile:w-[240px]"
        >
          <Image src={SAX_TOKEN_DETAILS} alt="SAX Token Details" width={491} height={575} />
        </div>
      </div>
    </div>
  );
};

export default TokenDetails;
