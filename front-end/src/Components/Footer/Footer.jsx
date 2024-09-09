import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <div className="footer-icons">
        <div className="footer-icons-container">
          <a href="https://www.instagram.com/rovenel_abanga?igsh=MWJkaG1td2VsbDg3cA%3D%3D&utm_source=qr">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://x.com/RovenelAbanga">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2024 All Rights Reserved</p>
      </div>
    </div>
  );
};
export default Footer;
