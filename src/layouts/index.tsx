import type { FC, PropsWithChildren } from "react";
import React from "react";

import Header from "./header";
import Footer from "./footer";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-full bg-[#000000]">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
