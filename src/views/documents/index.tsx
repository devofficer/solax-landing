import React from "react";

import { Border, Row } from "components";

const Documents = () => {
  return (
    <div data-aos="fade-up" className="mt-[276px] pb-[43px] uppercase text-center normal:hidden">
      <div className="pb-[55px] font-bold text-[32px] leading-[40px]">Documents</div>
      <Row className="items-center justify-center space-x-[48px] tablet:space-x-[30px]">
        <a
          href="https://drive.google.com/file/d/1eA3K8mfEG_SUN2VF_9r8Of2k23p8i3j7/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="font-normal text-[18px] leading-[22px] cursor-pointer hover:underline"
        >
          White Paper
        </a>
        <Border className="h-[16px] w-px bg-label" />
        <a
          href="https://drive.google.com/file/d/1FA8TMHwu3aRvvCG6FfYvyWXuSIY0qPY-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="font-normal text-[18px] leading-[22px] cursor-pointer hover:underline"
        >
          Pitch Deck
        </a>
        <Border className="h-[16px] w-px bg-label" />
        <div className="font-normal text-[18px] leading-[22px] cursor-pointer">Legal Disclaimer</div>
      </Row>
    </div>
  );
};

export default Documents;
