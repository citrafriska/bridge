import React from "react";
import { Link } from "react-router-dom";
import i18next from "i18next";
import logo from "./../../assets/bridge-logo--horiz.svg";
import { useTranslation } from "react-i18next";

function Navigation() {
  const { t } = useTranslation();

  return (
    <>
      <div className="nav-main">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="" width="80%" />
          </Link>
        </div>

        <div className="nav-langs">
          <Link
            style={{ textDecoration: "none", marginRight: "0.5rem" }}
            onClick={() => i18next.changeLanguage("en")}
            to="#"
          >
            <span>🇬🇧</span>
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            onClick={() => i18next.changeLanguage("id")}
            to="#"
          >
            <span>🇮🇩</span>
          </Link>
        </div>

        <Link to="/beta">
          <button className="primary-btn" id="nav-btn">
            {t("apply_button_text")}
          </button>
        </Link>
        <div>
          <Link style={{ textDecoration: "none" }} to="#">
            <h6 style={{ paddingTop: "10px" }}>Login</h6>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navigation;
