import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Lakeside Mini Golf</p>
        <p>Family Fun by the Water</p>
      </div>
    </footer>
  );
};

export default Footer;
