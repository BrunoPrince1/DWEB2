import { createContext, useEffect, useState } from "react";
import { LotteryContextProps, Props, ProviderProps } from "../types";
import { getLottery } from "../services/Lottery";

export const LotteryContext = createContext({} as LotteryContextProps);

async function fetchMegasenaData(setData: (data: Props) => void) {
  const result = await getLottery();
  if ("megasena" in result) {
    setData(result.megasena);
  }
}

export function LotteryProvider({ children }: ProviderProps) {
  const [megasena, setMegasena] = useState<Props | undefined>();

  useEffect(() => {
    fetchMegasenaData(setMegasena);
  }, []);

  const contextValue = { megasena };

  return (
    <LotteryContext.Provider value={contextValue}>
      {children}
    </LotteryContext.Provider>
  );
}
