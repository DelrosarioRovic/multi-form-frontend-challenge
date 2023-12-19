import PersonalForm from "./Personal-info-form";
import SelectYourPlan from "./Select-your-plan";
import AddsOn from "./Adds-on";
import Summary from "./Summary";
import Confirm from "./Confirm";

const Content = ({
  active,
  setActive,
  name,
  setName,
  email,
  setEmail,
  phoneN,
  setPhoneN,
  planSelect,
  setPlanSelect,
  selectedPlan,
  setSelectedPlan,
  enabled,
  setEnabled,
  isSwitch,
  setIsSwitch,
  selectedAddNum,
  setSelectedAddNum,
  selectedAddCons,
  setSelectedAddCons,
}) => {
  return (
    <div className="flex p-10 lg:w-[700px] lg:h-[500px] justify-center max-md:shadow-xl max-md:bg-white max-md:rounded-lg max-md:relative max-md:-top-20 max-md:w-full">
      {active === 0 ? (
        <PersonalForm
          setActive={setActive}
          active={active}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phoneN={phoneN}
          setPhoneN={setPhoneN}
        />
      ) : active === 1 ? (
        <SelectYourPlan
          setActive={setActive}
          active={active}
          planSelect={planSelect}
          setPlanSelect={setPlanSelect}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
          enabled={enabled}
          setEnabled={setEnabled}
          isSwitch={isSwitch}
          setIsSwitch={setIsSwitch}
        />
      ) : active === 2 ? (
        <AddsOn
          setActive={setActive}
          active={active}
          isSwitch={isSwitch}
          selectedAddNum={selectedAddNum}
          setSelectedAddNum={setSelectedAddNum}
          selectedAddCons={selectedAddCons}
          setSelectedAddCons={setSelectedAddCons}
        />
      ) : active === 3 ? (
        <Summary
          setActive={setActive}
          active={active}
          isSwitch={isSwitch}
          selectedPlan={selectedPlan}
          selectedAddCons={selectedAddCons}
          setSelectedAddCons={setSelectedAddCons}
        />
      ) : (
        <Confirm />
      )}
    </div>
  );
};

export default Content;
