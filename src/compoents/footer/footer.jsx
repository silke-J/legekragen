import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { MdOutlineFacebook } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="kundeservice">
      <h2>Kundeservice</h2>

      <div className="service">
        <div className="email">
          <IoMail />
          <h3> kontakt@legekrogen.dk</h3>
        </div>

        <div className="tele">
          <BsFillTelephoneFill />
          <h3> +45 23 45 67 89</h3>
        </div>
      </div>

      <div className="socialMedia">
        <h4>Følg os</h4>
        <div className="media"></div>
        <MdOutlineFacebook size={60} />
        <BsInstagram size={50} />
      </div>
    </footer>
  );
};
export default Footer;
