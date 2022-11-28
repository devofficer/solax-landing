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
        <Row className="flex flex-wrap items-center justify-between laptop:justify-center tablet:justify-center tv:py-6 py-4 space-x-4">
          {partner_site_list.map((partner, index) => (
            <a key={`partner_${index}`} aria-label={partner.label} href={partner.path} target="_blank" rel="noopener noreferrer">
              <Row className="items-center mt-2 mb-2 laptop:mx-12  tablet:mx-10 normal:mx-0">
                <Image src={partner.icon} alt="F Logo" width={partner.width} height={partner.height} />
              </Row>
            </a>
          ))}
        </Row>
        {/* </Row> */}
      </Container>
    </div>
  );
};

export default TrustBy;
