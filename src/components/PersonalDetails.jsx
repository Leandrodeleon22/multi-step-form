import classes from "./PersonalDetails.module.css";
import InputWithLabel from "./InputWithLabel";
import { useDispatch, useSelector } from "react-redux";
import {
  setInputValue,
  setError,
  nextStep,
  setIsValid,
} from "../features/personal-info/personalInfoSlice";
import Button from "./ButtonNext";
import { useEffect, useRef } from "react";
import ButtonNext from "./ButtonNext";
import ButtonPrevious from "./ButtonPrevious";

const PersonalDetails = () => {
  const dispatch = useDispatch();
  const { name, phone, email, errors, isValid } = useSelector(
    (store) => store.personalInfo
  );

  // useEffect(() => {
  //   validateInputs();
  // }, [dispatch, name, email, phone]);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const isValidCheck = validateInputs();

  //   if (isValidCheck) {
  //     dispatch(nextStep());
  //   }

  //   dispatch(setIsValid(true));
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (e.target.validity.valid) dispatch(setInputValue({ name, value }));
    else if (value === "") dispatch(setInputValue({ name, value }));
  };

  // const handleEmailErrorChange = () => {
  //   if (email.trim() === "") {
  //     dispatch(handleEmailError(true));
  //   }
  // };

  // const validateInputs = () => {
  //   if (name === "") {
  //     dispatch(setError({ nameInput: "name", errorInput: "name is required" }));
  //   } else {
  //     dispatch(setError({ nameInput: "name", errorInput: "" }));
  //   }

  //   if (email === "") {
  //     dispatch(
  //       setError({ nameInput: "email", errorInput: "email is required" })
  //     );
  //   } else {
  //     dispatch(setError({ nameInput: "email", errorInput: "" }));
  //   }

  //   if (phone === "") {
  //     dispatch(
  //       setError({ nameInput: "phone", errorInput: "phone is required" })
  //     );
  //   } else {
  //     dispatch(setError({ nameInput: "phone", errorInput: "" }));
  //   }

  //   return !errors.name && !errors.email && !errors.phone;
  // };

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
          value={name}
          onChange={handleInputChange}
          errorMessage={errors.name}
        />
        <InputWithLabel
          name="email address"
          inputType="email"
          value={email}
          onChange={handleInputChange}
          errorMessage={errors.email}
        />
        <InputWithLabel
          name="Phone number"
          inputType="tel"
          value={phone}
          pattern="^-?[1-9]\d*\.?\d*$"
          onChange={handleInputChange}
          errorMessage={errors.phone}
        />

        {/* <ButtonNext name="Next Step" /> */}

        {/* <div className={classes.buttonWrapper}>
          <button>Next Step</button>
        </div> */}
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
