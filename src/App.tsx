import { FC } from "react";

import usePortfolioData from "./hooks/usePortfolioData";

import "./App.css";

const App: FC = () => {
  const portfolioData = usePortfolioData();
  console.log(portfolioData);

  return <div className="App">Hello, World!</div>;
};

export default App;
