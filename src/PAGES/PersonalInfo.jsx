import classes from "./PersonalInfo.module.css";
import Steps from "../components/Steps";
import PersonalDetails from "../components/PersonalDetails";
import { useDispatch, useSelector } from "react-redux";
import SelectPlan from "../components/SelectPlan";
import AddOns from "../components/AddOns";
import Summary from "../components/Summary";
import ButtonNext from "../components/ButtonNext";
import {
  setError,
  goBack,
  nextStep,
  setIsValid,
  getAddOns,
  setThankYouComponent,
} from "../features/personal-info/personalInfoSlice";
import { useEffect } from "react";
import ButtonPrevious from "../components/ButtonPrevious";

const PersonalInfo = () => {
  const {
    step,
    name,
    phone,
    email,
    errors,
    allAddOns,
    selected,
    thankYouComponent,
  } = useSelector((store) => store.personalInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    validateInputs();
  }, [dispatch, name, email, phone]);

  const handleClickBack = () => {
    dispatch(goBack());
  };

  const validateInputs = () => {
    if (name === "") {
      dispatch(setError({ nameInput: "name", errorInput: "name is required" }));
    } else {
      dispatch(setError({ nameInput: "name", errorInput: "" }));
    }

    const emailRegex =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    console.log(emailRegex.test(email));

    if (email === "" || !emailRegex.test(email)) {
      dispatch(
        setError({
          nameInput: "email",
          errorInput: `${
            !emailRegex.test(email) && email !== ""
              ? "invalid email"
              : "email is required"
          } `,
        })
      );
    } else {
      dispatch(setError({ nameInput: "email", errorInput: "" }));
    }

    if (phone === "") {
      dispatch(
        setError({ nameInput: "phone", errorInput: "phone is required" })
      );
    } else {
      dispatch(setError({ nameInput: "phone", errorInput: "" }));
    }

    return !errors.name && !errors.email && !errors.phone;
  };

  const handleClickNext = () => {
    dispatch(nextStep());

    const checkedData = allAddOns.filter((item) => {
      return item.isChecked;
    });

    dispatch(getAddOns(checkedData));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const isValidCheck = validateInputs();

    if (step === 1 && isValidCheck) {
      dispatch(nextStep());
    }

    if (step === 2 && selected) {
      dispatch(nextStep());
    }

    if (step === 3) {
      handleClickNext();
      dispatch(nextStep());
    }

    if (step === 4) {
      dispatch(nextStep());
      dispatch(nextStep());
      dispatch(setThankYouComponent("done"));
    }

    dispatch(setIsValid(true));
  };

  return (
    <>
      <section className={classes.container}>
        <Steps />
        {step === 1 ? <PersonalDetails /> : ""}
        {step === 2 ? <SelectPlan /> : ""}
        {step === 3 ? <AddOns /> : ""}
        {step === 4 ? <Summary /> : ""}
        {thankYouComponent === "done" ? (
          ""
        ) : (
          <div className={classes.btnContainer}>
            <ButtonPrevious submit={handleClickBack} />
            <ButtonNext
              name={`${step === 4 ? "Confirm" : "Next Step"}`}
              submit={submitHandler}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default PersonalInfo;
