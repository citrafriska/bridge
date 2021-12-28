import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

function Testimonial() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Zoe Schlag",
      occupation: `Entrepreneur ${t("pre_in")} Residence ${t(
        "pre_at"
      )} Schmidt Futures`,
      message: t("testimonial_zoe_text"),
      img: "zoe-schlag.png",
    },
    {
      id: "t1",
      name: "David Berkowitz",
      occupation: `Founder ${t("pre_at")} Serial Marketers`,
      message: t("testimonial_david_text"),
      img: "david-berkowitz.png",
    },
    {
      id: "t2",
      name: "Chris Adelsbach",
      occupation: `Managing Partner ${t("pre_at")} Outrun Ventures`,
      message: t("testimonial_chris_text"),
      img: "chris-adelsbach.png",
    },
    {
      id: "t3",
      name: "Anna Barber",
      occupation: "Partner, M13",
      message: t("testimonial_anna_text"),
      img: "anna-barber.png",
    },
    {
      id: "t4",
      name: "Alex Iskold",
      occupation: `Managing Partner ${t("pre_at")} 2048 Ventures`,
      message: t("testimonial_alex_text"),
      img: "alex-iskold.png",
    },
  ];
  return (
    <div className="testimonial-main">
      <div className="testimonial-wrapper">
        {testimonials.map((testi) => (
          <Fragment key={testi.id}>
            <div className="testimonial-blockquote">
              <div className="block-quote">{testi.message}</div>
              <div className="block-quote-arrow"></div>
            </div>

            <div className="testimonial-bio">
              <img
                src={require(`../../../assets/${testi.img}`)}
                alt=" "
                className="testimonial-img"
              />
              <div>
                <h5>{testi.name}</h5>
                <span>{testi.occupation}</span>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
