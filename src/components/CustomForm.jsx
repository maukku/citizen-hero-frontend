import { useState, useContext } from "react";
import FormContext from "../context/FormContext";

function CustomForm() {
  const {
    values,
    setValues,
    submitted,
    setSubmitted,
    handleRoleInputChange,
    handleLocationInputChange,
    handleReasonInputChange,
    handleContactWayInputChange,
    handleSubmit,
  } = useContext(FormContext);

  return (
    <div className="CustomForm">
      <form action="" onSubmit={handleSubmit} autoComplete="on">
        <div>Citizen Hero</div>
        <br />
        {/* Role */}
        <label htmlFor="role">I 'am a </label>
        <select
          id="role"
          name="role"
          value={values.role}
          onChange={handleRoleInputChange}
        >
          <option value="parent" selected>
            parent
          </option>
          <option value="young">young</option>
          <option value="busines person">busines person</option>
          <option value="other">other</option>
        </select>
        {/* Location */}
        <label htmlFor="location"> from </label>
        <input
          type="text"
          name="location"
          for="location"
          value={values.location}
          placeholder="Berlin Neuköln"
          onChange={handleLocationInputChange}
        />
        {submitted && !values.role ? (
          <div className="Error">Please enter your role</div>
        ) : null}
        {submitted && !values.location ? (
          <div className="Error">Please enter your location</div>
        ) : null}
        <br />
        <br />
        {/* Reason */}
        I care about this issue because
        <input
          type="text"
          name="reason"
          value={values.reason}
          onChange={handleReasonInputChange}
        />
        {submitted && !values.reason ? (
          <div className="Error">Please enter your reason</div>
        ) : null}
        {/* Contact */}
        <p>I would like to be contacted by the representative</p>
        <input
          type="checkbox"
          id="email"
          name="conactby"
          value="email"
          checked={values.contact === "email"}
          onChange={handleContactWayInputChange}
        />
        <label for="email">by email</label>
        <br />
        <input
          type="checkbox"
          id="post"
          name="conactby"
          value="post"
          checked={values.contact === "post"}
          onChange={handleContactWayInputChange}
        />
        <label for="post">by post</label>
        <br />
        <input
          type="checkbox"
          id="call"
          name="conactby"
          value="call"
          checked={values.contact === "call"}
          onChange={handleContactWayInputChange}
        />
        <label for="call">by phone call</label>
        {submitted && !values.contact ? (
          <div className="Error">
            Please indicate how you would like to be contacted
          </div>
        ) : null}
        <br />
        <br />
        <button type="submit" value="Generate personalized message">
          Generate personalized message
        </button>
        <br />
      </form>
    </div>
  );
}

export default CustomForm;
