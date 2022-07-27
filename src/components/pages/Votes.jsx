import React, { useState, useEffect } from "react";
import BlueButton from "../shared/BlueButton";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";

function Votes() {
  const [votesList, setVotesList] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchVotes() {
    const url = "https://polar-mountain-34312.herokuapp.com/votes";
    const response = await fetch(url);
    const votes = await response.json();
    setVotesList(votes);
    setLoading(true);
  }

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
        {loading ? (
          votesList.map((item) => {
            return (
              <div className="Vote-Item">
                <div className="Vote-Title">{item.title}</div>
                <div className="Vote-Description">{item.description}</div>
                <div className="Vote-Date">{item.date}</div>
                <br />
                <Divider></Divider>
              </div>
            );
          })
        ) : (
          <CircularProgress />
        )}
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
