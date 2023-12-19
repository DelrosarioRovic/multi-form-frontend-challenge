import { useState } from "react";

const PersonalForm = ({
  active,
  setActive,
  name,
  setName,
  email,
  setEmail,
  phoneN,
  setPhoneN,
}) => {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneN: "",
  });
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleIncrement = (e) => {
    e.preventDefault();
    // Set hasSubmitted to true to display persistent errors
    setHasSubmitted(true);

    // Validation logic
    const newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (email.trim() === "") {
      newErrors.email = "Email is required";
    }

    if (phoneN.trim() === "") {
      newErrors.phoneN = "Phone number is required";
    }

    if (Object.keys(newErrors).length > 0) {
      // If there are errors, update the error state
      setErrors(newErrors);
      return;
    }

    // If no errors, proceed to the next step
    setActive(active + 1);
  };

  return (
    <div className="flex flex-col gap-10 w-full">
      <div>
        <h1 className="text-3xl text-violet-950 font-bold">Personal Info</h1>
        <p className="text-gray-400">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col">
          <div className="flex justify-between text-sm">
            <label className="text-violet-950 text-sm">Name</label>
            {hasSubmitted && errors.name && (
              <p className="text-red-700">{errors.name}</p>
            )}
          </div>

          <input
            type="text"
            placeholder="e.g. Stephen King"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`outline-1 outline-gray-200 p-3 border rounded-md ${
              hasSubmitted && errors.name && "!border-red-700"
            }`}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <label className="text-violet-950 text-sm">Email Address</label>
            {hasSubmitted && errors.email && (
              <p className="text-red-700 text-sm">{errors.email}</p>
            )}
          </div>

          <input
            type="text"
            placeholder="e.g. stephenking@lorem.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`outline-1 outline-gray-200 p-3 border rounded-md ${
              hasSubmitted && errors.email && "!border-red-700"
            }`}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <label className="text-violet-950 text-sm">Phone Number</label>
            {hasSubmitted && errors.phoneN && (
              <p className="text-red-700 text-sm">{errors.phoneN}</p>
            )}
          </div>

          <input
            type="text"
            placeholder="e.g. + 1 234 567 890"
            value={phoneN}
            onChange={(e) => setPhoneN(e.target.value)}
            className={`outline-1 outline-gray-200 p-3 border rounded-md ${
              hasSubmitted && errors.phoneN && "!border-red-700"
            }`}
          />
        </div>
        <div className="justify-end flex mt-5">
          <button
            className="px-5 py-4 bg-violet-950 text-white rounded-md"
            onClick={handleIncrement}
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalForm;
