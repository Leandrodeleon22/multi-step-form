import classes from "./ButtonNext.module.css";

const ButtonNext = ({ name, submit }) => {
  return (
    <div
      className={`${classes.buttonWrapper} ${
        name === "Confirm" ? classes.confirm : ""
      } `}
      onClick={submit}
    >
      <button>{name}</button>
    </div>
  );
};

export default ButtonNext;
