import { createSlice } from "@reduxjs/toolkit";
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";

const initialAddOnsData = [
  {
    id: 1,
    title: "Online service",
    subTitle: "Access to multiplayer games",
    ratePerMonth: 1,
    ratePerYear: 10,
    isChecked: false,
  },
  {
    id: 2,
    title: "Larger storage",
    subTitle: "Extra 1TB of cloud save",
    ratePerMonth: 2,
    ratePerYear: 20,
    isChecked: false,
  },

  {
    id: 3,
    title: "Customizable profile",
    subTitle: "Custom theme on your profile",
    ratePerMonth: 2,
    ratePerYear: 20,
    isChecked: false,
  },
];

const initialDataPlan = [
  {
    icon: arcade,
    namePlan: "Arcade",
    termPerYear: 90,
    termPerMonth: 9,
    free: "2 months free",
  },
  {
    icon: advanced,
    namePlan: "Advanced",
    termPerMonth: 12,
    termPerYear: 120,
    free: "2 months free",
  },
  {
    icon: pro,
    namePlan: "Pro",
    termPerYear: 150,
    termPerMonth: 15,
    free: "2 months free",
  },
];

const initialState = {
  name: "",
  phone: "",
  email: "",
  step: 1,
  isActive: "active",
  isHidden: "hidden",
  isYear: "",
  typeOfPlan: "",
  yearlyMonthly: "Yearly",
  allAddOns: initialAddOnsData,
  allDataPlan: initialDataPlan,
  addOns: [],
  selected: null,
  selectedPlan: {},
  toggleMonthlyYearly: false,
};

const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    nameInput: (state, actions) => {
      state.name = actions.payload;
    },
    emailInput: (state, actions) => {
      state.email = actions.payload;
    },
    phoneInput: (state, actions) => {
      state.phone = actions.payload;
    },
    nextStep: (state) => {
      if (state.step < 4) {
        state.step = state.step + 1;
      }
      if (state.step === 4) {
        state.step = 4;
      }
    },
    goBack: (state) => {
      if (state.step === 1) {
        state.step = 1;
      } else {
        state.step = state.step - 1;
      }
    },
    getSelectedPlan: (state, actions) => {
      const [selectedNamePlan, selectedTerm] = actions.payload;
      state.isYear = selectedNamePlan;
      state.typeOfPlan = selectedTerm;
    },
    getYearlyMonthlyPlan: (state, actions) => {
      state.yearlyMonthly = actions.payload;
    },
    getAddOns: (state, actions) => {
      state.addOns = actions.payload;
    },
    updateAllAddOns: (state, actions) => {
      state.allAddOns = actions.payload;
    },
    updateSelected: (state, actions) => {
      state.selected = actions.payload;
    },
    updateToggleMonthlyYearly: (state, actions) => {
      state.toggleMonthlyYearly = actions.payload;
    },
    updateSelectedPlan: (state, actions) => {
      state.selectedPlan = actions.payload;
    },
  },
});

export const {
  nameInput,
  emailInput,
  phoneInput,
  nextStep,
  goBack,
  getSelectedPlan,
  getYearlyMonthlyPlan,
  getAddOns,
  updateAllAddOns,
  updateSelected,
  updateToggleMonthlyYearly,
  updateSelectedPlan,
} = personalInfoSlice.actions;

export default personalInfoSlice.reducer;
