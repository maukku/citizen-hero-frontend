import RepresentativeItem from "../RepresentativeItem";
import RepresentativeContext from "../../context/RepresentativeContext.js";
import React, { useState, useContext, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


import SearchIcon from "@mui/icons-material/Search";
import ZipCodeError from "../ZipCodeError";
function Politicians() {
  const { representatives, setRepresentative, loading } = useContext(
    RepresentativeContext
  );
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(20);

  const propsToCheck = ["constituencyZipCodes"];

  let filteredList = representatives.filter((item) => {
    return propsToCheck.some((key) =>
      String(item[key]).toLowerCase().includes(query.toString().toLowerCase())
    );
  });
  console.log(index);
  return (
    <div>
      <input
        placeholder={`Insert a zipcode`}
        onChange={(e) => setQuery(e.target.value)}
        inputmode="numeric"
        className="SearchBar"
        type="number"
      />

      {query.length > 0 ? (
        <div className="Politicians-container">
          <RepresentativeItem
            className="Politicians-container"
            representatives={filteredList}
          />
        </div>
      ) 
      : loading ? (
        <div>
          <div className="Politicians-container">
            <RepresentativeItem
              representatives={representatives.slice(0, index)}
            />
          </div>
          <br />
          <button className="BlueButton" onClick={() => setIndex(index + 4)}>
            Load More
          </button>
        </div>
      ) : (
        <CircularProgress />
      )}

       {
        filteredList.length == 0 ? (
          <div className="Politicians-container">
            <ZipCodeError />{" "}
          </div>
        ) : null  
      } 
    </div>
  );
}

export default Politicians;
