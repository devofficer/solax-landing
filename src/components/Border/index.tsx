import type { FC } from "react";
import React from "react";

import type { ExtraTWClassProps } from "utils";

const Border: FC<ExtraTWClassProps> = ({ className }) => {
  return <div className={`${className}`} />;
};

export default Border;
