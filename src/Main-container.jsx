import LeftNavigation from "./components/Left-navigation";
import Content from "./components/Content";
import { useState } from "react";

const MainContainer = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-white flex gap-5 shadow-lg p-5 rounded-lg">
      <LeftNavigation setActive={setActive} active={active} />
      <Content active={active} setActive={setActive} />
    </div>
  );
};

export default MainContainer;
