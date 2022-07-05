import React, { useState, useEffect } from "react";

function SearchInput({ dataObject }) {
  const [searchInput, setSearchInput] = useState("");

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);

   const filteredData= dataObject.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
  };

  return (
    <div className="SearchInput">
      <input
        placeholder="Search for Zip Code..."
        onChange={(event) => searchItems(event.target.value)}
      />
    </div>
  );
}

export default SearchInput;
