const navItem = [
  {
    num: 1,
    step: "STEP 1",
    desc: "YOUR INFO",
  },
  {
    num: 2,
    step: "STEP 2",
    desc: "SELECT PLAN",
  },
  {
    num: 3,
    step: "STEP 3",
    desc: "ADD-ONS",
  },
  {
    num: 4,
    step: "STEP 4",
    desc: "SUMMARY",
  },
];

const LeftNavigation = ({ setActive, active }) => {
  const getIndex = (index) => {
    setActive(index);
  };

  return (
    <div className="left-nav p-5 pr-20 pt-10 rounded-lg">
      <ul className="flex flex-col gap-7">
        {navItem.map((item, index) => (
          <li className="flex gap-5 items-center px-1" key={index}>
            <span
              className={`rounded-full px-3 py-1 outline outline-white outline-1 text-white ${
                index === active && "bg-white !text-violet-950 outline-0"
              }`}
              onClick={() => getIndex(index)}
            >
              {item.num}
            </span>
            <div className="flex flex-col gap-x-2">
              <p className="text-white opacity-60 font-light text-xs">
                {item.step}
              </p>
              <p className="text-white font-semibold">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftNavigation;
