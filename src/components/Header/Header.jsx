import { useSelector } from "react-redux";

import "./Header.css";

function Header({ displayTotal }) {
  const total = 5.99; //useSelector((store) => store.total);
  console.log(displayTotal);
  return (
    <header id="app-header">
      <h1 id="app-title">Prime Pizza</h1>
      {displayTotal && <p id="total">Total: ${total}</p>}
    </header>
  );
}

export default Header;
