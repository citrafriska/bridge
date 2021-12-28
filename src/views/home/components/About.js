import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  const contents = [
    {
      heading: "about_card_happy_heading_text",
      text: "about_card_happy_content_text",
      img: "happy.svg",
      id: "happy",
    },
    {
      heading: "about_card_rate_heading_text",
      text: "about_card_rate_content_text",
      img: "rate.svg",
      id: "rate",
    },
    {
      heading: "about_card_personal_heading_text",
      text: "about_card_personal_content_text",
      img: "personal.svg",
      id: "personal",
    },
  ];

  return (
    <div className="about-main">
      <div className="about-heading">
        <h1>{t("about_headline_text")}</h1>
      </div>
      <div className="about-cards">
        {contents.map((content, i) => (
          <div className="about-card" key={i}>
            <img
              src={require(`../../../assets/${content.img}`)}
              id={content.id}
              alt=""
            />
            <h3>{t(content.heading)}</h3>
            <p>{t(content.text)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
