import React, { createContext, useState, useContext, ReactNode } from 'react';

interface NameContextType {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const NameContext = createContext<NameContextType | undefined>(undefined);

interface NameProviderProps {
  children: ReactNode;  
}

export const NameProvider: React.FC<NameProviderProps> = ({ children }) => {
  const [name, setName] = useState<string>('');

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useName = (): NameContextType => {
  const context = useContext(NameContext);
  if (!context) {
    throw new Error('useName must be used within a NameProvider');
  }
  return context;
};
