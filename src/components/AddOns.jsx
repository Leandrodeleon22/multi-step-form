// import { useEffect, useState } from "react";
import classes from "./AddOns.module.css";
import ButtonNext from "./ButtonNext";
import ButtonPrevious from "./ButtonPrevious";
import { useDispatch, useSelector } from "react-redux";
import {
  nextStep,
  goBack,
  getAddOns,
  updateAllAddOns,
} from "../features/personal-info/personalInfoSlice";

const AddOns = () => {
  const dispatch = useDispatch();

  const { allAddOns, yearlyMonthly } = useSelector(
    (store) => store.personalInfo
  );

  // const [data, setIsData] = useState(initialData);

  // const handleClickNext = () => {
  //   dispatch(nextStep());

  //   const checkedData = allAddOns.filter((item) => {
  //     return item.isChecked;
  //   });

  //   dispatch(getAddOns(checkedData));
  // };

  const handleClickBack = () => {
    dispatch(goBack());
  };

  // const data = [
  //   {
  //     id: 1,
  //     title: "Online service",
  //     subTitle: "Access to multiplayer games",
  //     ratePerMonth: 1,
  //     isChecked: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Larger storage",
  //     subTitle: "Extra 1TB of cloud save",
  //     ratePerMonth: 2,
  //     isChecked: false,
  //   },

  //   {
  //     id: 3,
  //     title: "Customizable profile",
  //     subTitle: "Custom theme on your profile",
  //     ratePerMonth: 2,
  //     isChecked: false,
  //   },
  // ];

  const handleCheckBox = (itemId) => {
    const updatedData = allAddOns.map((item) => {
      if (item.id === itemId) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });

    dispatch(updateAllAddOns(updatedData));
  };

  // const getCheckeData = () => {
  //   const checkedData = data.filter((item) => {
  //     return item.isChecked;
  //   });

  //   dispatch(getAddOns(checkedData));
  // };
  // getCheckeData();

  // useEffect(() => {
  //   getCheckeData();
  //   localStorage.setItem("addOnsData", JSON.stringify(data));
  // }, [data]);

  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>
      </div>

      {allAddOns.map((item) => {
        return (
          <div key={item.id} className={classes.checkBox}>
            <label>
              <input
                type="checkbox"
                checked={item.isChecked}
                onChange={() => handleCheckBox(item.id)}
                className={classes.checkBoxInput}
              />
            </label>
            <div className={classes.checkBoxTitle}>
              <h2>{item.title}</h2>
              <p>{item.subTitle}</p>
            </div>
            <span>{`+$${
              yearlyMonthly === "Monthly" ? item.ratePerMonth : item.ratePerYear
            }/ ${yearlyMonthly === "Monthly" ? "mo" : "yr"}`}</span>

            {/* <div>
              <ButtonNext name="Next Step" submit={handleClickNext} />
              <ButtonPrevious submit={handleClickBack} />
            </div> */}
          </div>
        );
      })}

      {/* <div className={classes.checkBox}>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckBox}
            className={classes.checkBoxInput}
          />
        </label>
        <div className={classes.checkBoxTitle}>
          <h2>Online service</h2>
          <p>Access to multiplayer games</p>
        </div>
        <span>+$1/mo</span>
        <div>
          <ButtonNext />
          <ButtonPrevious />
        </div>
      </div> */}
    </div>
  );
};

export default AddOns;
