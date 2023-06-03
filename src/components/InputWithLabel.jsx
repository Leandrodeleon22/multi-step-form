import classes from "./InputWithLabel.module.css";

const InputWithLabel = ({ name, value, onChange, inputType }) => {
  let inputElement;

  if (inputType === "name") {
    inputElement = (
      <input
        type={inputType}
        id={name}
        value={value}
        onChange={onChange}
        className={classes.input}
        placeholder="e.g. Stephen King"
      />
    );
  } else if (inputType === "email") {
    inputElement = (
      <input
        type={inputType}
        id={name}
        value={value}
        onChange={onChange}
        className={classes.input}
        placeholder="e.g. stephenking@lorem.com"
      />
    );
  } else if (inputType === "number") {
    inputElement = (
      <input
        id={name}
        type="text"
        pattern="^-?[1-9]\d*\.?\d*$"
        value={value}
        onChange={onChange}
        className={classes.input}
        // pattern="\(?\d{3}\)?-? *\d{3}-? *-?\d{4}"
        placeholder="e.g. +1 234-567-890"
      />
    );
  }
  return (
    <div className={classes.inputWrapper}>
      <label htmlFor="inputName">{name}</label>
      {inputElement}
    </div>
  );
};

export default InputWithLabel;
