import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie/es6";
import { useTranslation } from "react-i18next";

function ApplyForm(props) {
  const { setLoading } = props;
  const { t } = useTranslation();
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    api_key: "JTFW8O",
    email: "",
    referral_link: "http://mywebsite.com?&ref_id=1234",
  });

  const applyBeta = async (e) => {
    e.preventDefault();
    const clearError = () => {
      setTimeout(() => {
        setError(false);
      }, 2500);
    };
    var mailformat = /^\S.*@\S+$/;
    const emailCheck = mailformat.test(data.email);

    if (data.email === "") {
      setError("Please input your valid email");
      clearError();
    } else if (emailCheck === false) {
      setError("Email is invalid");
      clearError();
    } else {
      setLoading(true);
      await axios
        .post(`https://getwaitlist.com/api/v1/waitlists/submit`, data)
        .then(async (response) => {
          const cookies = new Cookies();
          cookies.set("waiting-line", response.data.current_priority);
          props.setWaitingLine(response.data.current_priority);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  return (
    <div className="apply-content">
      <h5>{t("headline_text")}</h5>
      <p>Hi! 👋</p>
      <p>{t("apply_form_text")}</p>

      <form onSubmit={(e) => applyBeta(e)}>
        <label>{t("apply_label_text")}</label>
        <input
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <div className="apply-input-error">
          {error ? <span>{error}</span> : null}
        </div>

        <button className="primary-btn">Submit</button>
      </form>
    </div>
  );
}

export default ApplyForm;
