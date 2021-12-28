import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ApplyButton() {
  const { t } = useTranslation();
  return (
    <Link to="/beta">
      <button className="primary-btn">{t("apply_button_text")}</button>
    </Link>
  );
}

export default ApplyButton;
