import { template } from "../data/customTemplateData";
function CustomMessageForm() {
  return (
    <>
      <form className="formContainer" action="" autoComplete="on">
        <h3 className="horizontal-center">Citizen Hero</h3>
        {/* Role and location */}
        <label htmlFor="role">I 'am a </label>
        <select id="role" name="role">
          <option value="parent" selected>
            parent
          </option>
          <option value="young">young</option>
          <option value="busine">busine</option>
          <option value="other">other</option>
        </select>
        <label htmlFor="location"> from </label>
        <input
          type="text"
          name="location"
          for="location"
          placeholder="Berlin Neuköln"
        />
        <br />
        <br />
        {/* Reason */}
        <p>I care about this issue because</p>
        <input type="radio" id="x" name="reason" value="x" />
        <label for="x">x</label>
        <br />
        <input type="radio" id="y" name="reason" value="y" />
        <label for="y">y</label>
        <br />
        <input type="radio" id="z" name="reason" value="z" />
        <label for="z">z</label>
        {/* Contact */}
        <p>I would like to be contacted by the representative</p>
        <input type="checkbox" id="email" name="conactby" value="email" />
        <label for="email">by email</label>
        <br />
        <input type="checkbox" id="post" name="conactby" value="post" />
        <label for="post">by post</label>
        <br />
        <input type="checkbox" id="call" name="conactby" value="call" />
        <label for="call">by phone call</label>
        <br />
        <br />
        <button type="submit" value="Generate personalized message">
          {" "}
          Generate personalized message
        </button>
        <br />
      </form>
    </>
  );
}

export default CustomMessageForm;
