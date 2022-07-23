import React from "react";
import BlueButton from "../shared/BlueButton";
import { Link } from "react-router-dom";

function Votes() {
  return (
    <div className="BasicContainer">
      <div className="Title">Votes</div>
      <Link to="/Newsletter">
        <BlueButton text={"Get future votes subscribing here"} />
      </Link>
      <div className="Votes-Container">
        <p>Some Votes</p>
      </div>
    </div>
  );
}

export default Votes;
//Abstimmung object name
//Id;
//Titel;
//Beschreibung;
//Datum;
//Gremium;
