import RepresentativeContext from "../context/RepresentativeContext";
import React, { useState, useContext } from "react";

function RepresentativeItem() {
  const { representative } = useContext(RepresentativeContext);

  return representative.map((item) => (
    <div className="Representative">
      <img className="Representative-img" src={item.imageUrl} alt="" />
      <div className="Representative-text">
        <div>{item.fullName}</div>
        <div>{item.nationalPoliticalGroup}</div>
      </div>
    </div>
  ));
}

export default RepresentativeItem;
