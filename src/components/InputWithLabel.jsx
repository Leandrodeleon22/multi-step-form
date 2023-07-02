import classes from "./InputWithLabel.module.css";
import { useSelector } from "react-redux";

const InputWithLabel = ({ name, value, onChange, inputType, errorMessage }) => {
  const { isValid } = useSelector((store) => store.personalInfo);
  let inputElement;
  const inputEmail = name.split(" ")[0];

  const inputPhone = name.split(" ")[0].toLowerCase();
  if (inputType === "name") {
    inputElement = (
      <input
        name={name}
        type={inputType}
        id={name}
        value={value}
        onChange={onChange}
        className={`${classes.input} ${
          isValid && errorMessage ? classes.error : ""
        } `}
        placeholder="e.g. Stephen King"
      />
    );
  } else if (inputType === "email") {
    inputElement = (
      <input
        name={inputEmail}
        type={inputType}
        id={name}
        value={value}
        onChange={onChange}
        className={`${classes.input} ${
          isValid && errorMessage ? classes.error : ""
        }`}
        placeholder="e.g. stephenking@lorem.com"
      />
    );
  } else if (inputType === "tel") {
    inputElement = (
      <input
        name={inputPhone}
        id={name}
        type="tel"
        pattern="^-?[1-9]\d*\.?\d*$"
        value={value}
        onChange={onChange}
        className={`${classes.input} ${
          isValid && errorMessage ? classes.error : ""
        }`}
        // pattern="\(?\d{3}\)?-? *\d{3}-? *-?\d{4}"
        placeholder="e.g. +1 234-567-890"
      />
    );
  }

  return (
    <div className={classes.inputWrapper}>
      <label htmlFor="inputName">
        {name}
        {<p className={classes.errorText}>{isValid && errorMessage} </p>}
      </label>
      {inputElement}
    </div>
  );
};

export default InputWithLabel;
