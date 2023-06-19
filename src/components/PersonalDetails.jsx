import classes from "./PersonalDetails.module.css";
import InputWithLabel from "./InputWithLabel";
import { useDispatch, useSelector } from "react-redux";
import {
  nameInput,
  emailInput,
  phoneInput,
  nextStep,
} from "../features/personal-info/personalInfoSlice";
import Button from "./ButtonNext";

const PersonalDetails = () => {
  const dispatch = useDispatch();
  const { name, phone, email } = useSelector((store) => store.personalInfo);
  // const [nameValue, setNameValue] = useState("");
  // const [emailValue, setEmailValue] = useState("");
  // const [numberValue, setNumberValue] = useState("");

  const handleNameChange = (e) => {
    const value = e.target.value;

    dispatch(nameInput(value));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;

    dispatch(emailInput(value));
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;

    // if (e.target.validity.valid) {
    //   setNumberValue(value);
    // }

    dispatch(phoneInput(value));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(nextStep());
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <form onSubmit={submitHandler}>
        <InputWithLabel
          name="name"
          inputType="name"
          value={name}
          onChange={handleNameChange}
        />
        <InputWithLabel
          name="email address"
          inputType="email"
          value={email}
          onChange={handleEmailChange}
        />
        <InputWithLabel
          name="Phone number"
          inputType="number"
          value={phone}
          onChange={handleNumberChange}
        />

        <Button name="Next Step" />
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
