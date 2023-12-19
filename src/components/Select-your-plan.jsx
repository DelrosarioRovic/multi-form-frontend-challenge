import puzzleIcon from "../assets/images/icon-advanced.svg";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import proIcon from "../assets/images/icon-pro.svg";
import SwitchComp from "./Switch";

const SelectYourPlan = ({
  active,
  setActive,
  planSelect,
  setPlanSelect,
  setSelectedPlan,
  isSwitch,
  setIsSwitch,
  enabled,
  setEnabled,
}) => {
  const plansMonthly = [
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

  const plansYearly = [
    {
      plansIcon: arcadeIcon,
      title: "Arcade",
      price: "$90/mo",
      free: "2 months free",
    },
    {
      plansIcon: puzzleIcon,
      title: "Advanced",
      price: "$120/mo",
      free: "2 months free",
    },
    {
      plansIcon: proIcon,
      title: "Pro",
      price: "$150/mo",
      free: "2 months free",
    },
  ];

  const handleDecrement = (e) => {
    e.preventDefault();
    setActive(active - 1);
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    setActive(active + 1);
    if (isSwitch) {
      setSelectedPlan(plansYearly[planSelect]);
    } else {
      setSelectedPlan(plansMonthly[planSelect]);
    }
  };

  const handleSelectPlan = (index) => {
    setPlanSelect(index);
  };

  const renderPlan = (plan, index) => (
    <div
      className={`border ${
        planSelect === index && "border-violet-950"
      } w-[33%] px-5 py-2 flex flex-col gap-5 rounded-md`}
      key={index}
      onClick={() => handleSelectPlan(index)}
    >
      <div>
        <img src={plan.plansIcon} alt={plan.title} />
      </div>
      <div>
        {!isSwitch && <p className="h-6 w-full"></p>}
        <p className="text-violet-950">{plan.title}</p>
        <p className="text-gray-400">{plan.price}</p>
        {isSwitch && <p>{plan.free}</p>}
      </div>
    </div>
  );

  return (
    <div className={`flex flex-col gap-10 w-full`}>
      <div>
        <h1 className="text-3xl text-violet-950 font-bold">Select your plan</h1>
        <p className="text-gray-400">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="flex justify-evenly ${}py-5 gap-5">
        {isSwitch ? plansYearly.map(renderPlan) : plansMonthly.map(renderPlan)}
      </div>
      <div className="flex w-full justify-evenly py-[10px]">
        <span className={`${isSwitch && "opacity-50"}`}>Monthly</span>
        <SwitchComp
          enabled={enabled}
          setEnabled={setEnabled}
          isSwitch={isSwitch}
          setIsSwitch={setIsSwitch}
        />
        <span className={`${!isSwitch && "opacity-50"}`}>Yearly</span>
      </div>
      <div className="flex justify-between">
        <button className="text-violet-950" onClick={handleDecrement}>
          Go Back
        </button>
        <button
          className="text-white bg-violet-950 px-5 py-4 rounded-md"
          onClick={handleIncrement}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default SelectYourPlan;
