import classes from "./PersonalInfo.module.css";
import Steps from "../components/Steps";
import PersonalDetails from "../components/PersonalDetails";
import { useSelector } from "react-redux";
import SelectPlan from "../components/SelectPlan";
import AddOns from "../components/AddOns";
import Summary from "../components/Summary";

const PersonalInfo = () => {
  const { step } = useSelector((store) => store.personalInfo);
  return (
    <section className={classes.container}>
      <Steps />
      {step === 1 ? <PersonalDetails /> : ""}
      {step === 2 ? <SelectPlan /> : ""}
      {step === 3 ? <AddOns /> : ""}
      {step === 4 ? <Summary /> : ""}
    </section>
  );
};

export default PersonalInfo;
