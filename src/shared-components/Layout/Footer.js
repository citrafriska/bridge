import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/bridge-logo-small.svg";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer-main">
      <div className="footer footer-logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <span>{t("footer_tagline")}</span>
      </div>

      <div className="footer footer-copyright">
        <span>Copyright © 2021, Bridge. All rights reserved.</span>
        <div>
          <Link to={"/"}>Term</Link>
          <Link to={"/"}>Privacy</Link>
          <Link to={"/"}>Cookies</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
