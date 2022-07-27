import React from "react";
import BlueButton from "../shared/BlueButton";
import { Link } from "react-router-dom";

function Votes() {

async function fetchVotes(){
  const url = "https://polar-mountain-34312.herokuapp.com/votes" ;
const response  = await fetch(url)
const votes = await response.json();

return votes;

}

fetchVotes().then(votes => {
  console.log(votes);
})



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
