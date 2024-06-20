import headerLogo from "../../assets/logos/header-logo.png"
import burguerMenuIcon from "../../assets/svg/burger-menu.svg"
import "./Header.css"
import HamburguerMenu from "./hamburguer-menu/HamburguerMenu";

function Header() {
  return (
    <div className="header">
      <img src={headerLogo} alt="header-img-logo" className="header-img-logo" />
      <button><img src={burguerMenuIcon} alt="burger-menu-icon" /></button>
      <HamburguerMenu/>
    </div>
  );
}

export default Header;
