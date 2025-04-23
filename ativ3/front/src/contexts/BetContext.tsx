import {
    createContext,
    useState,
    useContext,
    useCallback,
    ReactNode,
  } from 'react';
  
  type Bet = number[];               // [03, 17, 28, 42, 51, 60]
  
  type BetCtx = {
    currentBet: Bet | null;
    history: Bet[];
    newBet: () => void;
  };
  
  const BetContext = createContext<BetCtx | null>(null);
  
  export const BetProvider = ({ children }: { children: ReactNode }) => {
    const [currentBet, setCurrentBet] = useState<Bet | null>(null);
    const [history, setHistory] = useState<Bet[]>([]);
  
    // função estável — referência não muda a cada render
    const newBet = useCallback(() => {
      const bet: Bet = [];
      while (bet.length < 6) {
        const n = Math.floor(Math.random() * 60) + 1;
        if (!bet.includes(n)) bet.push(n);
      }
      bet.sort((a, b) => a - b);
      setCurrentBet(bet);
  

      setHistory(h => [...h, bet].slice(-4));
    }, []);
  
    return (
      <BetContext.Provider value={{ currentBet, history, newBet }}>
        {children}
      </BetContext.Provider>
    );
  };
  
  export const useBet = () => {
    const ctx = useContext(BetContext);
    if (!ctx) throw new Error('useBet must be inside BetProvider');
    return ctx;
  };
  