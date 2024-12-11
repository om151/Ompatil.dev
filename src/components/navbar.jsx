import "./navbar.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin,faTwitter,faTelegramPlane } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="lnav ">Om patil</div>

      <div className="mnav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="rnav">
      <a
          href="https://t.me/Ompatil_2705"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon tele"
        >
          <FontAwesomeIcon icon={faTelegramPlane} />
        </a>
        <a
          href="https://www.linkedin.com/in/om-patil-587a82274/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://x.com/Om_patil2705"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon x"
        >
         <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}  