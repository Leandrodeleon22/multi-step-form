import { useSelector } from "react-redux";
import classes from "./ButtonPrevious.module.css";

const ButtonPrevious = ({ submit }) => {
  const { step, thankYouComponent } = useSelector(
    (store) => store.personalInfo
  );

  return (
    <div className={`${classes.buttonWrapper} `} onClick={submit}>
      <button className={`${step === 1 ? classes.hideGoBack : ""}`}>
        Go Back
      </button>
    </div>
  );
};

export default ButtonPrevious;
