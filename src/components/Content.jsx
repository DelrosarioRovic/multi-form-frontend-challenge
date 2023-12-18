import PersonalForm from "./Personal-info-form";
import SelectYourPlan from "./Select-your-plan";

const Content = ({ active, setActive }) => {
  return (
    <div className="flex p-10 lg:w-[700px] lg:h-[500px] justify-center">
      {active === 0 ? (
        <PersonalForm setActive={setActive} active={active} />
      ) : active === 1 ? (
        <SelectYourPlan setActive={setActive} active={active} />
      ) : (
        <p>gg</p>
      )}
    </div>
  );
};

export default Content;
