import { useState, useContext } from "react";
import FormContext from "../../context/FormContext";
import BlueButton from "../shared/BlueButton";

function SendEmail() {
  const {
    values,
    setValues,
    submitted,
    setSubmitted,
    handleRoleInputChange,
    handleLocationInputChange,
    handleReasonInputChange,
    handleSubmit,
  } = useContext(FormContext);

  const template = `HI i am ${values.role} from ${values.location} and I care about that issue because ${values.reason}`;
  return (
    <div className="BasicContainer">
      <form action="" onSubmit={handleSubmit} autoComplete="on">
        <div className="Title">Contact your representatives</div>
        <br />
        {/* Role */}
        <label htmlFor="role">I 'am a </label>
        <input
          list="role"
          for="role"
          className="TextBox"
          onChange={handleRoleInputChange}
          style={{ width: "fit-content" }}
        ></input>
        <datalist id="role" name="role" value={values.role}>
          <option value="parent">parent</option>
          <option value="young">young</option>
          <option value="business person">business person</option>
        </datalist>
        {/* Location */}
        <label htmlFor="location"> from </label>
        <input
          type="number"
          className="TextBox"
          style={{ width: "50px" }}
          name="location"
          for="location"
          pattern="[0-9]{5}"
          value={values.location}
          placeholder="10115"
          onChange={handleLocationInputChange}
        />
        {submitted && !values.role ? (
          <div className="Error">Please enter your role</div>
        ) : null}
        {submitted && !values.location ? (
          <div className="Error">Please enter your zip code</div>
        ) : null}
        <br />
        <br />
        {/* Reason */}
        I care about this issue because
        <br />
        <input
          className="TextBox"
          type="text"
          name="reason"
          value={values.reason}
          onChange={handleReasonInputChange}
        />
        {submitted && !values.reason ? (
          <div className="Error">Please enter your reason</div>
        ) : null}
        <br />
        <br />
        <br />
        <a
          className="BlueButton"
          href={`mailto:contact@citizenhero.de?subject=A political request&body=${template}`}
        >
          Generate personalized message
        </a>
      </form>
    </div>
  );
}

export default SendEmail;
