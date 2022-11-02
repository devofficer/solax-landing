import type { FC, PropsWithChildren } from "react";
import React, { createContext, useContext, useState } from "react";

export interface MainActionContextProp {
  isActionLoading: boolean;
  setIsActionLoading: (value: boolean) => void;
}

export const MainActionContext = createContext<MainActionContextProp>({
  isActionLoading: false,
  setIsActionLoading: (value: boolean) => {
    return value;
  },
});

export const MainActionProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isActionLoading, setIsActionLoading] = useState<boolean>(false);

  return (
    <MainActionContext.Provider
      value={{
        isActionLoading,
        setIsActionLoading,
      }}
    >
      {children}
    </MainActionContext.Provider>
  );
};

export const useMainAction = () => {
  return useContext(MainActionContext);
};

export default MainActionProvider;
