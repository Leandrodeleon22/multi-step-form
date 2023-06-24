import classes from "./SelectPlan.module.css";
import ToggleSLider from "./ToggleSLider";
import ButtonNext from "./ButtonNext";
import ButtonPrevious from "./ButtonPrevious";
import { useDispatch, useSelector } from "react-redux";
import {
  nextStep,
  goBack,
  getSelectedPlan,
  getYearlyMonthlyPlan,
  updateSelected,
  updateToggleMonthlyYearly,
  updateSelectedPlan,
} from "../features/personal-info/personalInfoSlice";

const selectPlan = () => {
  const {
    yearlyMonthly,
    allDataPlan,
    selected,

    toggleMonthlyYearly,
  } = useSelector((store) => store.personalInfo);
  const dispatch = useDispatch();

  // const [selected, setSelected] = useState(null);
  // const [plan, setPlan] = useState("");
  // const [selectedName, setSelectedName] = useState("");
  // const [selectedTermPerMonth, setSelectedTermPerMonth] = useState("");

  // const { nextStep } = useSelector((store) => store.personalInfo);

  const handleClickNext = () => {
    if (selected || selected === 0) {
      dispatch(nextStep());
    }
  };

  const handleClickBack = () => {
    dispatch(goBack());
  };

  const handleOptionClick = (index, namePlan, term, termPerMonth, item) => {
    dispatch(updateSelected(index));

    let selectedPlan = term;
    if (yearlyMonthly === "Yearly") {
      selectedPlan = term;
    }
    if (yearlyMonthly === "Monthly") {
      selectedPlan = termPerMonth;
    }

    dispatch(getSelectedPlan([namePlan, selectedPlan]));
    dispatch(updateSelectedPlan(item));
    // setPlan(selectedPlan);
    // setSelectedName(namePlan);
    // selectedTermPerMonth(termPerMonth);
    // console.log(index);
  };

  const handleTerm = (e) => {
    const value = e.target.checked;

    let year = "Yearly";
    let monthly = "Monthly";

    if (!value) {
      dispatch(getYearlyMonthlyPlan(year));
      // dispatch(getSelectedPlan([selectedName, plan]));
    }

    if (value) {
      dispatch(getYearlyMonthlyPlan(monthly));

      // dispatch(getSelectedPlan([selectedName, selectedTermPerMonth]));
    }

    dispatch(updateToggleMonthlyYearly(value));
    dispatch(updateSelected(null));
    dispatch(getSelectedPlan([null, null]));
  };

  return (
    <div className={classes.container}>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className={classes.planOptions}>
        {allDataPlan.map((item, index) => (
          <div
            key={item.namePlan}
            className={`${classes.options} ${
              selected === index ? classes.selected : ""
            }`}
            onClick={() =>
              handleOptionClick(
                index,
                item.namePlan,
                item.termPerYear,
                item.termPerMonth,
                item
              )
            }
          >
            <img src={item.icon} alt={item.namePlan} />
            <h2>{item.namePlan}</h2>
            <span className={classes.term}>
              {yearlyMonthly === "Yearly"
                ? `$${item.termPerYear}/yr`
                : `$${item.termPerMonth}/mo `}
            </span>
            <p className={classes.free}>
              {yearlyMonthly === "Monthly" ? "" : item.free}
            </p>
          </div>
        ))}
      </div>

      <div className={classes.containerToggle}>
        <span>monthly</span>
        <ToggleSLider
          className={classes.switch}
          change={handleTerm}
          checked={toggleMonthlyYearly}
        />
        <span>yearly</span>
      </div>
      <div>
        <ButtonNext name="Next Step" submit={handleClickNext} />
        <ButtonPrevious submit={handleClickBack} />
      </div>
    </div>
  );
};

export default selectPlan;
