import PersonalForm from "./Personal-info-form";
import SelectYourPlan from "./Select-your-plan";

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
      ) : (
        <p>gg</p>
      )}
    </div>
  );
};

export default Content;
