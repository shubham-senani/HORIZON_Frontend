import React from "react";
import "./Footer.css";
import footerlogo from "../Images/download-modified.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_body">
      <div className="footer_main">
        <div className="footer_links">
          <span className="footer_heading">Useful Links</span>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/timeline">Timeline</NavLink>
          <NavLink to="/about#FAQ">FAQs</NavLink>
          <a href="http://www.diu.iiitvadodara.ac.in/">Institute Website</a>
        </div>
        <div className="footer_links">
          <span className="footer_heading">Connect</span>
          <a href="https://instagram.com/technical_iiitvicd">Instagram</a>
          <a href="https://discord.gg/qkSMkJX2tK">Discord</a>
          <a href="mailto:technical@diu.iiitvadodara.ac.in">Email</a>
        </div>
        <div className="footer_together">
          <img className="footer_img1" src={footerlogo} alt="iiitv-icd" />
          <div className="footer_clg">
            <span className="footer_heading">
              Indian Institute of Information Technology Vadodara -
              International Campus Diu
            </span>
            <span className="footer_add">
              Education Hub, Kevdi, Diu - 362520.
            </span>
          </div>
        </div>
        <img className="footer_img2" src={footerlogo} alt="iiitv-icd" />
      </div>
      <div className="footer_end">Designed by Vector | Developed by Dcodr</div>
    </div>
  );
};
export default Footer;
