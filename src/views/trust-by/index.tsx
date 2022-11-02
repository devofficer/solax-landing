import React from "react";

import { Border, Container, Image, Row } from "components";

import VENTURES_LOGO from "assets/images/ventures_logo@4x.png";
import FRANKFURT_LOGO from "assets/images/frankfurt_logo@4x.png";

const TrustBy = () => {
  return (
    <div className="bg-trust">
      <Container>
        <Row className="items-center justify-between">
          <p className="uppercase font-bold text-[32px] normal:text-[24px] last:text-[20px] text-black leading-[40px]">Trusted By</p>
          <Row className="items-center space-x-[60px] normal:space-x-[40px] mobile:space-x-[12px]">
            <Border className="w-[3px] h-[116px] bg-black" />
            <Row className="items-center mobile:w-[80px] last:w-[70px]">
              <Image src={VENTURES_LOGO} alt="VT3 Logo" width={97} height={66} />
            </Row>
            <Row className="items-center mobile:w-[58px] last:w-[50px]">
              <Image src={FRANKFURT_LOGO} alt="F Logo" width={66.6} height={66.6} />
            </Row>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default TrustBy;
