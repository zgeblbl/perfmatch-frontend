import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Created by Özge Bülbül, Sümeyra Koç & Zeynep Yıldız &middot; © {new Date().getFullYear()} &middot; All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
