import { createContext, useContext, useState, ReactNode } from "react";

interface PortfolioContextType {
  isPortfolioVisible: boolean;
  showPortfolio: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);

  const showPortfolio = () => {
    setIsPortfolioVisible(true);
    // Scroll to portfolio section after a brief delay to ensure it's rendered
    setTimeout(() => {
      const element = document.querySelector("#portfolio");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <PortfolioContext.Provider value={{ isPortfolioVisible, showPortfolio }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};
