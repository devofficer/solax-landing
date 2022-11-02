import type { FC, PropsWithChildren } from "react";
import React from "react";

import { ClipLoader } from "react-spinners";

import type { ButtonProps, ExtraTWClassProps } from "utils";

const Button: FC<PropsWithChildren & ButtonProps & ExtraTWClassProps> = ({ children, action, disabled, isLoading, type, className }) => {
  return (
    <button
      type={type ? type : "button"}
      disabled={disabled}
      onClick={action}
      className={`h-[54px] px-[30px] rounded-full bg-primary_gradient active:bg-primary_gradient_active uppercase font-bold text-[16px] text-white ${className}`}
    >
      {isLoading ? <ClipLoader size={25} color="white" /> : children}
    </button>
  );
};

export default Button;
