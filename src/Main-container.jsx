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
  //adds ons
  const [selectedAddNum, setSelectedAddNum] = useState([0]);
  const [selectedAddCons, setSelectedAddCons] = useState([]);

  return (
    <div className="bg-white flex max-md:flex-col gap-5 shadow-lg p-5 rounded-lg max-md:w-full max-sm:p-0">
      <LeftNavigation setActive={setActive} active={active} />
      <div className="px-5">
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
          //adds on
          selectedAddNum={selectedAddNum}
          setSelectedAddNum={setSelectedAddNum}
          selectedAddCons={selectedAddCons}
          setSelectedAddCons={setSelectedAddCons}
        />
      </div>
    </div>
  );
};

export default MainContainer;
