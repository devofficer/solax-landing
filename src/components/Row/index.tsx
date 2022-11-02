import type { FC, PropsWithChildren } from "react";
import React from "react";

import type { AOSProps, ExtraTWClassProps } from "utils/types";

const Row: FC<PropsWithChildren & ExtraTWClassProps & AOSProps> = ({ children, className, animate, delay }) => {
  return (
    <div data-aos={animate} data-aos-delay={delay} className={`flex flex-row ${className}`}>
      {children}
    </div>
  );
};

export default Row;
