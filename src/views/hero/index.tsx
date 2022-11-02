import React from "react";

import { Border, Col, Container, Image, Row } from "components";

import HERO from "assets/images/hero@4x.png";
import SOLANA_LOGO from "assets/images/solana_logo@4x.png";

const Hero = () => {
  return (
    <Container className="h-full">
      {/*  className="h-[calc(100vh-88px-112px)]" 88px = height of header, 112px = height of `trusted by` part */}
      <Col className="h-[calc(100vh-216px)] desktop:h-full justify-center tv:justify-between">
        <Row className="relative pt-[177px] laptop:pt-[123px] mobile:pt-0">
          <Col>
            <div className="hidden mobile:flex w-[250px] h-[274px] self-end">
              <Image src={HERO} alt="HERO Logo" width={535} height={588} />
            </div>
            <div className="z-20 max-w-[759px] uppercase">
              <p className="font-bold text-[80px] leading-[100px] laptop:text-[70px] laptop:leading-[88px] mobile:text-[42px] mobile:leading-[52px]">
                <span className="text-transparent bg-text_gradient1 animate-gradient bg-clip-text">Smart Liquidity </span>Protocol
              </p>
            </div>
          </Col>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="animate-hero tablet:animate-none absolute z-10 top-[45px] right-0 laptop:w-[400px] laptop:top-[243px] normal:top-[180px] mobile:hidden"
          >
            <Image src={HERO} alt="HERO Logo" width={535} height={588} />
          </div>
          <div className="absolute top-[60px] right-[80px] w-[499px] h-[499px] bg-[#6481BB12] blur-[50px]" />
        </Row>
        <div data-aos="fade-right" className="pt-[140px] pb-[67px] laptop:pt-[253px] laptop:pb-[117px] mobile:pt-[42px] mobile:pb-[44px]">
          <Border className="w-[36%] normal:w-[50%] mobile:w-[70%] h-px bg-border_gradient" />
          <Row className="pt-[41px] space-x-[11px]">
            <p className="font-medium text-[16px] leading-[20px]">Powered by</p>
            <Image src={SOLANA_LOGO} alt="SOLANA Logo" width={124} height={20} />
          </Row>
        </div>
      </Col>
    </Container>
  );
};

export default Hero;
