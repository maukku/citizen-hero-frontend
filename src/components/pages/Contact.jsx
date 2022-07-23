import React from "react";

function Contact() {
  return (
    <div className="BasicContainer">
      <div className="Title">Contact</div>
      <div>
        If you want to get in touch with us please use the following email:
      </div>{" "}
      <br />
      <a className="Bolded-Link" href="mailto:contact@citizenhero.de">
        contact@citizenhero.de
      </a>
    </div>
  );
}

export default Contact;
