import { FC } from "react";

import PortfolioProvider from "./components/PortfolioProvider";
import Navbar from "./components/Navbar";
import AdminDashboard from "./components/AdminDashboard";

import "./App.css";

const App: FC = () => {
  const {
    location: { pathname },
  } = window;

  if (pathname && pathname.startsWith("/studio")) return <AdminDashboard />;

  return (
    <PortfolioProvider>
      <Navbar />
      <div className="App">Hello, World!</div>
    </PortfolioProvider>
  );
};

export default App;
