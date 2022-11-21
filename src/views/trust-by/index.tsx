import React from "react";

import { Border, Container, Image, Row } from "components";

import { partner_site_list } from "utils";
const TrustBy = () => {
  return (
    <div className="bg-trust">
      <Container>
        {/* <Row className="items-center justify-between normal:flex-col">
          <div className="uppercase font-bold text-[32px] pr-6 normal:pt-4  mobile:text-[24px] last:text-[20px] text-black leading-[40px] whitespace-nowrap last:py-2 ">
            Trusted By
          </div>
          <Border className="w-[3px] mr-4 h-[116px] bg-black normal:invisible normal:h-0" /> */}
        <Row className="items-center space-x-[60px] normal:py-4 normal:space-x-[40px] mobile:space-x-[12px] last:pb-3 last:pt-0 mobile:h-[86px] h-[116px]">
          {partner_site_list.map((partner, index) =>
            partner.label !== "vt3" ? (
              <a key={`partner_${index}`} aria-label={partner.label} href={partner.path} target="_blank" rel="noopener noreferrer">
                <Row className="items-center">
                  <Image src={partner.icon} alt="F Logo" width={partner.width} height={partner.height} />
                </Row>
              </a>
            ) : (
              <Row className="items-center">
                <Image src={partner.icon} alt="F Logo" width={partner.width} height={partner.height} />
              </Row>
            )
          )}
        </Row>
        {/* </Row> */}
      </Container>
    </div>
  );
};

export default TrustBy;
