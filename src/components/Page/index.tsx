import type { FC, PropsWithChildren } from "react";
import React from "react";

import { Seo } from "components";

import type { PageProps } from "utils";
import { seo_list } from "utils";

const Page: FC<PropsWithChildren & PageProps> = ({ children, name }) => {
  const getSeoList = () => {
    if (seo_list[name]) {
      return seo_list[name];
    }
  };

  const props = getSeoList();
  return (
    <section>
      <Seo {...props} />
      {children}
    </section>
  );
};

export default Page;
