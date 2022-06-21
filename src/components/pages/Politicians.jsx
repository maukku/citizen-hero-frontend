import React, { useState, useContext } from "react";
import RepresentativesList from "../RepresentativesList";
import RepresentativeContext from "../../RepresentativeContext";

function Politicians() {
  const { representative } = useContext(RepresentativeContext);

  return (
    <div className="Politicians">
      <RepresentativesList reprList={representative} />
    </div>
  );
}

export default Politicians;
