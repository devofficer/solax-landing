import type { FC, PropsWithChildren } from "react";
import React from "react";

import type { ExtraTWClassProps } from "utils";

const Container: FC<PropsWithChildren & ExtraTWClassProps> = ({ children, className }) => {
  return (
    <div className={`max-w-[1440px] mx-auto px-[146px] desktop:px-[40px] laptop:px-[30px] mobile:px-[15px] ${className}`}>{children}</div>
  );
};

export default Container;
