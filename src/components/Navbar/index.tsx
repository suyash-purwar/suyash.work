import { useContext } from "react";
import { PortfolioContext } from "./../PortfolioProvider";

const Navbar = () => {
  const value = useContext(PortfolioContext);

  console.log(value);

  return <h5>Data</h5>;
};

export default Navbar;
