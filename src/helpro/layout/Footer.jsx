import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import './Footer.css';
import { LogoNavbarHelpro } from "../components";

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-elements">
                <div className="footer-bloque-iconos">
                    <div className="footer-bloque-espacio"></div>
                    <div className="footer-iconos">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                        <MdEmail />
                    </div>
                    <div className="footer-bloque-espacio"></div>
                </div>
                <div className="footer-bloque-logo">
                    <div className="footer-logo">
                        <LogoNavbarHelpro />
                    </div>
                </div>
                <div className="footer-bloque-soporte">
                    Soporte: alejocarpa@gmail.com
                </div>
            </div>
        </div>
    )
}
