import classes from "./ButtonPrevious.module.css";

const ButtonPrevious = ({ submit }) => {
  return (
    <div className={classes.buttonWrapper} onClick={submit}>
      <button>Go Back</button>
    </div>
  );
};

export default ButtonPrevious;
