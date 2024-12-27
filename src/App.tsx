import { FC } from "react";

import PortfolioProvider from "./components/PortfolioProvider";
import Navbar from "./components/Navbar";

import "./App.css";

const App: FC = () => {
  return (
    <PortfolioProvider>
      <Navbar />
      <div className="App">Hello, World!</div>
    </PortfolioProvider>
  );
};

export default App;
