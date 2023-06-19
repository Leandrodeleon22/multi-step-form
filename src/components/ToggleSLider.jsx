import classes from "./ToggleSlider.module.css";

const ToggleSLider = ({ change, checked }) => {
  return (
    <label className={classes.switch}>
      <input type="checkbox" onChange={change} checked={checked} />
      <span className={`${classes.slider} ${classes.round}`}></span>
    </label>
  );
};

export default ToggleSLider;
