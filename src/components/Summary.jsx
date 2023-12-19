const Summary = ({
  selectedPlan,
  selectedAddCons,
  isSwitch,
  active,
  setActive,
  setSelectedAddCons,
}) => {
  const handleTotalSum = () => {
    selectedPlan.price;
    let total = 0;
    let totalCons = 0;
    selectedAddCons.forEach((cons) => {
      totalCons = totalCons + parseInt(cons.price);
    });
    total = parseInt(selectedPlan.price) + totalCons;
    return `+$${total}/${isSwitch ? "yr" : "mo"}`;
  };

  const handleIncrement = () => {
    setActive(active + 1);
  };

  const handleDecrement = () => {
    setActive(active - 1);
    setSelectedAddCons([]);
  };

  return (
    <div className="flex flex-col gap-10 w-full">
      <div>
        <h1 className="text-3xl text-violet-950 font-bold">Finishing up</h1>
        <p className="text-gray-400">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="flex flex-col gap-5 p-5">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-violet-950 font-semibold">
              {selectedPlan.title} ({isSwitch ? "Yearly" : "Monthly"})
            </h1>
            <button className="underline text-blue-700 text-sm">Change</button>
          </div>

          <p className="font-semibold text-violet-950">
            ${selectedPlan.price}/mo
          </p>
        </div>
        <hr />
        <div className="flex flex-col gap-3">
          {selectedAddCons.map((addCons) => (
            <div className="flex justify-between items-center">
              <p className="text-gray-400">{addCons.title}</p>
              <p className="text-violet-950">
                +${addCons.price} {isSwitch ? "yr" : "mo"}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-400">Total (per month)</p>
          <p className="text-blue-800 font-semibold">{handleTotalSum()}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <button className="text-gray-400" onClick={handleDecrement}>
          Go Back
        </button>
        <button
          className="text-white bg-violet-500 px-5 py-4 rounded-md"
          onClick={handleIncrement}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Summary;
