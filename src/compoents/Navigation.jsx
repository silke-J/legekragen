import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/legekrogen_logo.png"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <img src={logo} alt="Legekrogen`s logo" />
      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? <IoClose size={30} /> : <GiHamburgerMenu size={30} />}
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
    </nav>
  );
};
export default Navigation;
