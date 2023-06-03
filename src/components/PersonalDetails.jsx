import classes from "./PersonalDetails.module.css";
import InputWithLabel from "./InputWithLabel";

import { useState } from "react";

const PersonalDetails = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [numberValue, setNumberValue] = useState("");

  console.log(nameValue, emailValue, numberValue);

  const handleNameChange = (e) => {
    const value = e.target.value;

    setNameValue(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;

    setEmailValue(value);
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;

    // if (e.target.validity.valid) {
    //   setNumberValue(value);
    // }

    setNumberValue(value);
  };

  console.log(nameValue, emailValue, numberValue);

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <form>
        <InputWithLabel
          name="name"
          inputType="name"
          value={nameValue}
          onChange={handleNameChange}
        />
        <InputWithLabel
          name="email address"
          inputType="email"
          value={emailValue}
          onChange={handleEmailChange}
        />
        <InputWithLabel
          name="Phone number"
          inputType="number"
          value={numberValue}
          onChange={handleNumberChange}
        />
        <div className={classes.buttonWrapper}>
          <button>Next Step</button>
        </div>
        {/* <div className={classes.title}>
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>

      <div className={classes.inputWrapper}>
        <label htmlFor="inputName">name</label>
        <input type="text" id="inputName" />
      </div>

      <div className={classes.inputWrapper}>
        <label htmlFor="inputName">Email Address</label>
        <input type="text" id="inputName" />
      </div>

      <div className={classes.inputWrapper}>
        <label htmlFor="inputName">Phone Number</label>
        <input type="text" id="inputName" />
      </div> */}
      </form>
    </div>
  );
};

export default PersonalDetails;
