import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./../styles/component.scss";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-grids">
            <div className="grid socials">
              <h3>Find us at</h3>
              <ul>
                <li>
                  <a href="">
                    <FaInstagram /> Instagram
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaTwitter /> Twitter
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaFacebookF /> Facebook
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaYoutube /> YouTube
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaWhatsapp /> WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid more">
              <h3>More at Adriel Homes</h3>
              <ul>
                <li>
                  <a href="">FAQs</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Neighbourhood</a>
                </li>
                <li>
                  <a href="">Restaurant Guide</a>
                </li>
              </ul>
            </div>
            <div className="grid links">
              <h3>Interesting links</h3>
              <ul>
                <li>
                  <a href="">Partner with us</a>
                </li>
                <li>
                  <a href="">Real Estate Services</a>
                </li>
                <li>
                  <a href="">Bed & Breakfast Services</a>
                </li>
                <li>
                  <a href="">Tourism Services</a>
                </li>
                <li>
                  <a href="">Landscaping Services</a>
                </li>
              </ul>
            </div>
            <div className="grid">
              <h3>Contact</h3>
              <ul>
                <li>
                  <a href="https://www.google.com/maps?sca_esv=42f3e948118a1926&si=ACC90nwNTxmlAFWNb3pgsMvkdkU4CmC1uBT-rQrbAI3nSUev3Qo7dVNGBIc1YzcFDioVQQpAJbNBAYiVY5BrJb_Dne-3bOcDdJWXF48ijlv5cM0Q-RfTAyImm22dGjGuLvSMWyL-B0uYhRw6DXYLGtnvKkI5ytZ-lg%3D%3D&uds=ADvngMjcH0KdF7qGWtwTBrP0nt7dR1sv592jfXV3rDA30PV-7duI1xWg5XfWDI9MexjwBt59npcswBFtCmmPKzbz6-KeHNl40kNPY5_wPhq2hrjXEfpC_1vfxva1V7SVnTeAPGWatVPV&biw=1280&bih=585&dpr=1.5&um=1&ie=UTF-8&fb=1&gl=nl&sa=X&geocode=KYsR8O7Jp9wZMeeZeQlBEpkT&daddr=house+1+..opposite+Indian+embassy,+KG+284+St,+Kigali,+Rwanda">
                    House 1, opposite Indian embassy, KG 284 St, Kigali, Rwanda
                  </a>
                </li>
                <li>
                  <a href="mailto:info@adrielhomes.com">info@adrielhomes.com</a>
                </li>
                <li>
                  <a href="tel:250791206736">+250 791 206 736</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-left">
              <p>
                Copyright © {currentYear} Adriel Homes. All rights reserved.
              </p>
            </div>
            <div className="footer-bottom-right">
              <ul>
                <li>
                  <a href="privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="terms-and-conditions">Terms and Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
