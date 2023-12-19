import success from "../assets/images/icon-thank-you.svg";

const Confirm = () => {
  return (
    <div className="flex flex-col gap-10 w-full items-center justify-center">
      <div className="text-center flex flex-col justify-center items-center gap-5">
        <img src={success} alt="success" className="w-20"/>
        <h1 className="font-bold text-violet-950 text-3xl">Thank you!</h1>
        <p className="text-sm text-gray-400">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. if you ever need support, please feel free to email us
          at support@loregaming.com
        </p>
      </div>
    </div>
  );
};

export default Confirm;
