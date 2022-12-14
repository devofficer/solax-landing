import React, { type FC } from "react";
import { useRouter } from "next/router";

import { Button, Image } from "components";
import type { TemplateViewProps } from "utils";

const Template: FC<TemplateViewProps> = ({ title }) => {
  const router = useRouter();

  return (
    <div className="h-screen">
      <div className="h-full flex flex-col justify-center items-center space-y-8">
        <div className="tablet:w-[204px] mobile:w-[128px]">
          <Image src="/preview/default.png" alt="Logo for Sola-X" width={256} height={256} />
        </div>
        <div className="text-center font-bold text-[72px] laptop:text-[56px] tablet:text-[36px] mobile:text-[24px]">{title}</div>
        <Button action={() => router.push("/")}>Back to Home</Button>
      </div>
    </div>
  );
};

export default Template;
