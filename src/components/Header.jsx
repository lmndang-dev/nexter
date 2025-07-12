import Logo from "../assets/logo.png";
import LogoBBC from "../assets/logo-bbc.png";
import LogoForbes from "../assets/logo-forbes.png";
import LogoTechCrunch from "../assets/logo-techcrunch.png";
import LogoBusinnessInsider from "../assets/logo-bi.png";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Nexter Logo" className="header__logo" />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="btn header__btn">View our properties</button>
      <div className="header__seenon-text">Seen on</div>
      <div className="header__seenon-logos">
        <img src={LogoBBC} alt="Seen on logo 1" />
        <img src={LogoForbes} alt="Seen on logo 2" />
        <img src={LogoTechCrunch} alt="Seen on logo 3" />
        <img src={LogoBusinnessInsider} alt="Seen on logo 4" />
      </div>
    </div>
  );
};

export default Header;
