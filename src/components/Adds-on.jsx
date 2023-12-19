const AddsOnArrMonth = [
  {
    title: "Online service",
    desc: "Access to multiplayer games",
    price: 1,
  },
  {
    title: "Larger storage",
    desc: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    title: "Customizable Profile",
    desc: "Custom theme on your profile",
    price: 2,
  },
];

const AddsOnArrYear = [
  {
    title: "Online service",
    desc: "Access to multiplayer games",
    price: 10,
  },
  {
    title: "Larger storage",
    desc: "Extra 1TB of cloud save",
    price: 20,
  },
  {
    title: "Customizable Profile",
    desc: "Custom theme on your profile",
    price: 20,
  },
];

const AddsOn = ({
  active,
  setActive,
  isSwitch,
  selectedAddNum,
  setSelectedAddNum,
  selectedAddCons,
  setSelectedAddCons,
}) => {
  const handleDecrement = (e) => {
    e.preventDefault();
    setActive(active - 1);
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    setActive(active + 1);

    selectedAddNum.forEach((num) => {
      setSelectedAddCons((prev) => {
        if (isSwitch) {
          return [...prev, AddsOnArrYear[num]];
        } else {
          return [...prev, AddsOnArrMonth[num]];
        }
      });
    });
  };

  const handleAddSelectedNum = (index) => {
    // Toggle the selection status of the checkbox
    setSelectedAddNum((prevSelectedAdds) => {
      if (prevSelectedAdds.includes(index)) {
        return prevSelectedAdds.filter(
          (selectedIndex) => selectedIndex !== index
        );
      } else {
        return [...prevSelectedAdds, index];
      }
    });
  };

  const renderPlan = (adds, index) => (
    <div
      className={`flex justify-between items-center border ${
        selectedAddNum.includes(index) && "border-violet-700"
      } rounded-md px-5 py-2`}
      key={index}
    >
      <div className="flex items-center gap-5">
        <input
          type="checkbox"
          onChange={() => handleAddSelectedNum(index)}
          checked={selectedAddNum.includes(index)}
        />
        <div>
          <p className="text-violet-950 font-semibold">{adds.title}</p>
          <p className="text-gray-400">{adds.desc}</p>
        </div>
      </div>
      <div>
        <p className="text-violet-600 font-semibold">+${adds.price}/mo</p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-10 w-full">
      <div>
        <h1 className="text-3xl text-violet-950 font-bold">Pick add-ons</h1>
        <p className="text-gray-400">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        {isSwitch
          ? AddsOnArrYear.map(renderPlan)
          : AddsOnArrMonth.map(renderPlan)}
      </div>
      <div className="flex justify-between">
        <button className="text-gray-400" onClick={handleDecrement}>
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

export default AddsOn;
