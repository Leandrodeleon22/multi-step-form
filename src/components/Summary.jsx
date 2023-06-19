import classes from "./Summary.module.css";
import ButtonNext from "./ButtonNext";
import ButtonPrevious from "./ButtonPrevious";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, goBack } from "../features/personal-info/personalInfoSlice";

const Summary = () => {
  const dispatch = useDispatch();
  const { addOns, selectedPlan, yearlyMonthly } = useSelector(
    (store) => store.personalInfo
  );

  const totalRatePerMonth = addOns.reduce(
    (accumulator, item) => accumulator + item.ratePerMonth,
    0
  );
  const totalRatePerYear = addOns.reduce(
    (accumulator, item) => accumulator + item.ratePerYear,
    0
  );

  const totalRateOfPlan =
    yearlyMonthly === "Yearly"
      ? selectedPlan.termPerYear
      : selectedPlan.termPerMonth;

  console.log(totalRateOfPlan);
  // console.log(totalRatePerMonth);
  const handleClickNext = () => {
    dispatch(nextStep());
    console.log(selectedPlan);
  };

  const handleClickBack = () => {
    dispatch(goBack());
  };
  return (
    <div className={classes.container}>
      <div>
        <h1>Finishing up</h1>
        <p>Double check everything looks OK before confirming</p>
      </div>
      <div className={classes.summary}>
        <div className={classes.lists}>
          <div className={classes.plan}>
            <div className={classes.planName}>
              <span>{`${selectedPlan.namePlan} (${yearlyMonthly})`} </span>
              <span> Change </span>
            </div>
            <span>{`${
              yearlyMonthly === "Yearly"
                ? selectedPlan.termPerYear
                : selectedPlan.termPerMonth
            }/${yearlyMonthly === "Yearly" ? "yr" : "mo"}`}</span>
          </div>

          {addOns.map((item) => {
            return (
              <div key={item.id} className={classes.online}>
                <span> {item.title} </span>
                <span>{`+$${
                  yearlyMonthly === "Monthly"
                    ? item.ratePerMonth
                    : item.ratePerYear
                }/${yearlyMonthly === "Monthly" ? "mo" : "yr"}`}</span>
              </div>
            );
          })}
        </div>

        <div className={classes.total}>
          <span>Total (per month) </span>
          <span>{`+$${
            yearlyMonthly === "Monthly"
              ? totalRatePerMonth + totalRateOfPlan
              : totalRatePerYear + totalRateOfPlan
          } / ${yearlyMonthly === "Monthly" ? "mo" : "yr"}`}</span>
        </div>
      </div>
      <div>
        <ButtonNext name="Confirm" submit={handleClickNext} />
        <ButtonPrevious submit={handleClickBack} />
      </div>
    </div>
  );
};

export default Summary;
