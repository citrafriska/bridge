import React from "react";
import ApplyButton from "../../../shared-components/ApplyButton";
import { useTranslation } from "react-i18next";

function Offer() {
  const { t } = useTranslation();
  return (
    <>
      <div className="offer-main">
        <h1>{t("offer_text")}</h1>
        <ApplyButton />
      </div>
    </>
  );
}

export default Offer;
