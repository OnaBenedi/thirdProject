import headerLogo from "../../assets/logos/header-finished.png"
import burguerMenuIcon from "../../assets/svg/burger-menu.svg"
import "./Header.css"
import HamburguerMenu from "./hamburguer-menu/HamburguerMenu";

function Header() {
  return (
    <div className="header">
      <img src={headerLogo} alt="header-img-logo" className="header-img-logo" />
      <HamburguerMenu/>
    </div>
  );
}

export default Header;
