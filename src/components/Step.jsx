import classes from "./Step.module.css";
import { useSelector } from "react-redux";

const Step = () => {
  const { step } = useSelector((store) => store.personalInfo);
  const data = [
    { numberStep: 1, text: "step 1", detail: "Your Info" },
    { numberStep: 2, text: "step 2", detail: "Select Plan" },
    { numberStep: 3, text: "step 3", detail: "Add-Ons" },
    { numberStep: 4, text: "step 4", detail: "Summary" },
  ];

  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.numberStep} className={classes.container}>
            <div
              className={`${classes.circle} ${
                step === item.numberStep ? classes.active : ""
              }`}
            >
              <span
                className={`${classes.number} ${
                  step === item.numberStep ? classes.active : ""
                }`}
              >
                {item.numberStep}
              </span>
            </div>
            <div>
              <span className={classes.text}>{item.text}</span>
              <p>{item.detail}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Step;
