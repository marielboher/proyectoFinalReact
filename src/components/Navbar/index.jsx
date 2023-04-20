import "./navbar.css";
import CartWidget from "../CartWidget";
import Logo from "../../assets/multimedia/logo-cropped.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <div className="info-envio">
        <p>FREE SHIPPING | FREE NO-HASSLE RETURNS</p>
      </div>
      <div className="nav-container">
        <div className="nav-wrapper">
          <div className="icon-logo">
            <Link to="/">
              <img src={Logo} className="logo"></img>
            </Link>
          </div>
          <div className="icon-mobile">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="toggle" onClick={toggleNav}>
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
          </div>
          <div className={isNavOpen ? "menu" : "menu-click"}>
            <div className="menu-item">
              <ul className="shop">
                <li>
                  <Link to="/user" onClick={closeNav}>
                    <PersonIcon />
                  </Link>
                </li>
                <li>
                  <Link to="/products" onClick={closeNav}>
                    SHOP ALL
                  </Link>
                </li>
                <li className="hover-menu">
                  <Link>CATEGORIES</Link>
                  <ul className="sub-menu">
                    <Link to="/category/chair">
                      <li onClick={closeNav}>CHAIR</li>
                    </Link>
                    <Link to="/category/lamps">
                      <li onClick={closeNav}>LAMPS</li>
                    </Link>
                    <Link to="/category/textile">
                      <li onClick={closeNav}>TEXTILE</li>
                    </Link>
                    <Link to="/category/vases">
                      <li onClick={closeNav}>VASES</li>
                    </Link>
                  </ul>
                </li>
              </ul>
              <div className="cart-container icon">
                <Link to="/cart">
                  <div className="cart" onClick={closeNav}>
                    <CartWidget />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
