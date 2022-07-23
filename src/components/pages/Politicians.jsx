import RepresentativeItem from "../RepresentativeItem";
import RepresentativeContext from "../../context/RepresentativeContext.js";
import React, { useState, useContext, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ZipCodeError from "../ZipCodeError";
function Politicians() {
  const { representatives, setRepresentative } = useContext(
    RepresentativeContext
  );
  const [query, setQuery] = useState("");

  const propsToCheck = ["constituencyZipCodes"];

  let filteredList = representatives.filter((item) => {
    return propsToCheck.some((key) =>
      String(item[key]).toLowerCase().includes(query.toString().toLowerCase())
    );
  });

  return (
    <div>
      
<input
          placeholder={`Insert a zipcode`}
          onChange={(e) => setQuery(e.target.value)}
          inputmode="numeric"
          className="SearchBar"
          type="number"
        />
        {query.length > 5 ? (
          <div className="Error">Please insert a proper ZipCode</div>
        ) : null}
    

      {filteredList.length == 0 ? (
        <div className="Politicians-container">
          <ZipCodeError />{" "}
        </div>
      ) : (
        <div className="Politicians-container">
          <RepresentativeItem representatives={filteredList} />
        </div>
      )}
    </div>
  );
}

export default Politicians;
