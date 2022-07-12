import React, { useState, useEffect } from "react";

function SearchInput({ dataObject }) {
  const [searchInput, setSearchInput] = useState("");

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);

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
