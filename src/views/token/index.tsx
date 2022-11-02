import React from "react";

import GeneralInfo from "./general-info";
import Tokenomics from "./tokenomics";
import TokenUtility from "./token-utility";

const Token = () => {
  return (
    <div className="mt-14">
      <Tokenomics />
      <div className="grid grid-cols-2 laptop:grid-cols-1 gap-[23px] pt-[53px] laptop:pt-[50px] normal:pt-[30px]">
        <GeneralInfo />
        <TokenUtility />
      </div>
    </div>
  );
};

export default Token;
