import puzzleIcon from "../assets/images/icon-advanced.svg";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import proIcon from "../assets/images/icon-pro.svg";
import SwitchComp from "./Switch";
import { useState } from "react";

const SelectYourPlan = ({ active, setActive }) => {
  const [enabled, setEnabled] = useState(false);
  const plans = [
    {
      plansIcon: arcadeIcon,
      title: "Arcade",
      price: "$9/mo",
    },
    {
      plansIcon: puzzleIcon,
      title: "Advanced",
      price: "$12/mo",
    },
    {
      plansIcon: proIcon,
      title: "Pro",
      price: "$15/mo",
    },
  ];

  const handleDecrement = (e) => {
    e.preventDefault();
    setActive(active - 1);
  };

  console.log(active);
  return (
    <div className="flex flex-col gap-10 w-full">
      <div>
        <h1 className="text-3xl text-violet-950 font-bold">Select your plan</h1>
        <p className="text-gray-400">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="flex justify-evenly py-5 gap-5">
        {plans.map((plan, index) => (
          <div
            className="border border-violet-950 w-[33%] px-5 py-2 flex flex-col gap-5 rounded-md"
            key={index}
          >
            <div>
              <img src={plan.plansIcon} alt={plan.title} />
            </div>
            <div>
              <p className="text-violet-950">{plan.title}</p>
              <p className="text-gray-400">{plan.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-evenly py-[10px]">
        <span>Monthly</span>
        <SwitchComp enabled={enabled} setEnabled={setEnabled} />
        <span>Yearly</span>
      </div>
      <div className="flex justify-between">
        <button className="text-violet-950" onClick={handleDecrement}>
          Go Back
        </button>
        <button className="text-white bg-violet-950 px-5 py-4 rounded-md">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default SelectYourPlan;
