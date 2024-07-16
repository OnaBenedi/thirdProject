import headerLogo from "../../assets/logos/header-finished.png"
import headerLogoMbl from "../../assets/logos/header-mobile.png"
import "./Header.css"
import HamburguerMenu from "./hamburguer-menu/HamburguerMenu";

function Header() {
  return (
    <div className="header">
      <img src={headerLogo} alt="header-img-logo" className="header-img-logo" />
      <img src={headerLogoMbl} alt="header-img-mobile-logo" className="header-mobile-logo" />
      <HamburguerMenu/>
    </div>
  );
}

export default Header;
