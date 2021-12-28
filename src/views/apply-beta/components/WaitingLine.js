import React from "react";
import { useTranslation } from "react-i18next";

function WaitingLine(props) {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("waiting_text", { waiting_number: props.num })}</h2>
    </div>
  );
}

export default WaitingLine;
