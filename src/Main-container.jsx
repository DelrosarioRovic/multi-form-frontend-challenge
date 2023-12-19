import LeftNavigation from "./components/Left-navigation";
import Content from "./components/Content";
import { useState } from "react";

const MainContainer = () => {
  const [active, setActive] = useState(0);
  //personal form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneN, setPhoneN] = useState("");
  //plan select
  const [planSelect, setPlanSelect] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState({});
  const [enabled, setEnabled] = useState(false);
  const [isSwitch, setIsSwitch] = useState(false);

  return (
    <div className="bg-white flex gap-5 shadow-lg p-5 rounded-lg">
      <LeftNavigation setActive={setActive} active={active} />
      <Content
        //personal form
        active={active}
        setActive={setActive}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phoneN={phoneN}
        setPhoneN={setPhoneN}
        //select plan
        planSelect={planSelect}
        setPlanSelect={setPlanSelect}
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        enabled={enabled}
        setEnabled={setEnabled}
        isSwitch={isSwitch}
        setIsSwitch={setIsSwitch}
      />
    </div>
  );
};

export default MainContainer;
