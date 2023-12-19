import PersonalForm from "./Personal-info-form";
import SelectYourPlan from "./Select-your-plan";
import AddsOn from "./Adds-on";
import Summary from "./Summary";

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
    <div className="flex p-10 lg:w-[700px] lg:h-[500px] justify-center">
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
          selectedAddNum={selectedAddNum}
          setSelectedAddNum={setSelectedAddNum}
          selectedAddCons={selectedAddCons}
          setSelectedAddCons={setSelectedAddCons}
        />
      ) : (
        <Summary selectedPlan={selectedPlan} />
      )}
    </div>
  );
};

export default Content;
