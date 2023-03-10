import { useSelector } from "react-redux";
import { AppBar } from "@mui/material";

import "./Header.css";

function Header({ displayTotal, headerText }) {
  const total = useSelector((store) => store.total);
  return (
    <header id="app-header" color="primary">
      <h1 id="app-title">{headerText}</h1>
      {displayTotal && <p id="total">Total: ${total}</p>}
    </header>
  );
}

export default Header;
