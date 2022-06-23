import React, { useState, useContext } from "react";
import RepresentativesList from "../RepresentativesList";
import RepresentativeContext from "../../context/RepresentativeContext";

function Politicians() {
  const { representative } = useContext(RepresentativeContext);

  return (
    <div className="Politicians">
      <RepresentativesList reprList={representative} />
    </div>
  );
}

export default Politicians;
