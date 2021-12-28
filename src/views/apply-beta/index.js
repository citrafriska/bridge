import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie/es6";
import logo from "./../../assets/bridge-logo--horiz.svg";
import ApplyForm from "./components/ApplyForm";
import WaitingLine from "./components/WaitingLine";
import spinner from "./../../assets/spinner.gif";

function ApplyBeta() {
  const [loading, setLoading] = useState(false);
  const [waitingLine, setWaitingLine] = useState();

  useEffect(() => {
    const cookies = new Cookies();
    const hasApplied = cookies.get("waiting-line");
    if (hasApplied) {
      setWaitingLine(hasApplied);
    }
  }, [waitingLine]);

  return (
    <div className="apply-main">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      {loading ? (
        <img src={spinner} style={{ width: "4.5%" }} alt=" " />
      ) : !waitingLine ? (
        <ApplyForm setWaitingLine={setWaitingLine} setLoading={setLoading} />
      ) : (
        <WaitingLine num={waitingLine} />
      )}
    </div>
  );
}

export default ApplyBeta;
