import classes from "./PersonalInfo.module.css";
import Steps from "../components/Steps";
import PersonalDetails from "../components/PersonalDetails";

const PersonalInfo = () => {
  return (
    <section className={classes.container}>
      <Steps />
      <PersonalDetails />
    </section>
  );
};

export default PersonalInfo;
