import { useContext } from "react";
import FormContext from "../../context/FormContext";
import RepresentativeContext from "../../context/RepresentativeContext";

function SendEmail() {
  const { representatives } = useContext(RepresentativeContext);

  function returnEmail() {
    let response = [];
    representatives.map((item) => {
      if (item.constituencyZipCodes.includes(values.location)) {
        response.push(item.email);
      }
    });
    return response;
  }

  const {
    values,
    submitted,
    handleRoleInputChange,
    handleLocationInputChange,
    handleNameInputChange,
    handleReasonInputChange,
    handleSubmit,
  } = useContext(FormContext);

  const template = `Dear representative%0D%0A%0D%0A,
I am ${values.name} writing to you as a ${values.role}  from the district ${values.location} . As a ${values.role} and a voter from your constituency, I am writing to you to express my concern and ask you and your party to kindly vote in accordance with the wishes of the voters from your constituency on the upcoming voting in the parliament.%0D%0A%0D%0A
I'm concerned about this problem because ${values.reason}. We are trying our best to contribute, but in order to significantly improve the situation, we need the support of your party, other representatives, and the government to influence policies and take effective action to address this issue.%0D%0A%0D%0A
Although I am aware that this topic has been discussed in the past, little action has been taken, and I, like many others would really want to see more progress in this regard. Will you take the necessary measures to help resolve this problem?%0D%0A%0D%0A
I look forward to hearing your response%0D%0A
Yours sincerely,%0D%0A
  ${values.name}%0D%0A
  ${values.location}`;
  return (
    <div className="BasicContainer">
      <form action="" onSubmit={handleSubmit} autoComplete="on">
        <div className="Title">Contact your representatives</div>
        <br />
        {/* Role */}
        <label htmlFor="name">My name is </label>
        <input
          for="name"
          placeholder="Max Mustermann"
          type="text"
          className="TextBox"
          onChange={handleNameInputChange}
          style={{ width: "fit-content" }}
        ></input>
        <br />
        <br />
        <label htmlFor="role">I'm a </label>
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
          href={`mailto:${returnEmail()}?subject=A political request&body=${template}`}
        >
          Generate personalized message
        </a>
      </form>
    </div>
  );
}

export default SendEmail;
