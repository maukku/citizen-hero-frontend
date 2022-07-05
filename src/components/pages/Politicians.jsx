import RepresentativeItem from "../RepresentativeItem";
import RepresentativeContext from "../../context/RepresentativeContext.js";

import React, { useState, useContext } from "react";
import SearchInput from "../SearchInput";
function Politicians() {
  const { representatives } = useContext(RepresentativeContext);
  return (
    <div className="Politicians-container">
      <SearchInput dataObject={representatives} />
      <RepresentativeItem representatives={representatives} />
    </div>
  );
}

export default Politicians;
