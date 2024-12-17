import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/legekrogen_logo.png"
import { CiShoppingBasket } from "react-icons/ci";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <nav>
      <ul>
        <NavLink to="/">
          <img className="logo" src={logo} alt="Legekrogen`s logo" />
        </NavLink>
      </ul>

      <div className="click-button">
        <div className="kurv-button">
          <ul>
            <NavLink to="/kurv">
              <CiShoppingBasket size={30} color="white" className="kurv" />
            </NavLink>
          </ul>
        </div>

        <div className="burger-menu" onClick={toggleMenu}>
          {isOpen ? (
            <IoClose size={30} className="close" />
          ) : (
            <GiHamburgerMenu size={30} className="burger" />
          )}
        </div>

        <ul
          className={isOpen ? "nav-links open" : "nav-links"}
          onClick={toggleMenu}
        >
          <li>
            <NavLink to="/">Foreside</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
          <li>
            <NavLink to="/kundeklubben">Kundeklubben</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
