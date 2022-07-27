import React from "react";

function Home() {
  return (
    <div className="Home">
      <div className="Home-text">
        <p>
          Do you recall the last time you contacted your representative or got
          notified about a crucial vote in the parliament? If you don't then
          you’re at the right place.
        </p>
        <p>
          Citizen Hero uses software to bridge the gap between citizens and
          politics, empowering the common people to participate in politics and
          ensure that they are fairly represented. Users of Citizen Hero are
          able to track all recent and upcoming votes in the Parliament. Users
          have access to information on how and when their representatives voted
          on these issues, and if they believe they aren't doing enough, they
          can personalise templates and send them to their representatives in a
          matter of minutes.
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <img
        className="Home-Img"
        src="https://images.unsplash.com/photo-1631367095412-560d145151f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
        srcset=""
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="BasicContainer" style={{ width: "1000px" }}>
        <div className="Title">How to use Citizen Hero:</div>

        <div className="step"> Step 1</div>
        <div>
          {" "}
          Go to the login page to sign in or create an account. This account
          will help you to keep a track of the representatives from your area
          and their voting record.
        </div>

        <div className="step">Step 2</div>
        <div>
          Go to the Voting page for an overview of current and past votes in the
          parliament.
        </div>
        <div className="step">Step 3</div>
        <div>
          Go to the Politicians page and enter your postal code to learn who
          your local representatives are. There will be a list of the
          representatives with their details.
        </div>
        <div className="step"> Step 4</div>
        <div>
          If you want to contact any of the representatives, go to the "Send
          Email" page, fill out a short form, and then click "Generate
          personalised message." You will be redirected to an email client,
          where the representative's email address, the subject line, and the
          message's content will already be filled out for you. Simply click on
          Send after making any changes that you wish. That's all there is to
          it, be proud and pat yourself on the back for taking a step in the
          right direction!
        </div>
      </div>
    </div>
  );
}

export default Home;
