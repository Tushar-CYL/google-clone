import React, { useContext } from "react";
import { AppContext } from "../Helpers/Helpers";
import "./Mainbody.css";

const Mainbody = () => {
  const { activity, displayActivity, handleFunctions } = useContext(AppContext);

  return (
    <div className="MainBodyContainer">
      <div className="logoImg">
        <img src="./googleLogo.svg" alt="img" />
      </div>
      <div className="BoredCard">
        <button onClick={handleFunctions}>
          🔎  Now You Can Search Anyting || It's Clone of GOOGLE 🌎{" "}
        </button>
        {/* {displayActivity ? <p> Random Activity: {activity.activity}</p> : " "} */}
      </div>
    </div>
  );
};

export default Mainbody;
