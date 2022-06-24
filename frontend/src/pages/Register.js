import { useState } from "react";

function Register({ web3Handler, account, token }) {
  const [name, setName] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [alerts, setAlerts] = useState([]);
  let errors = [];

  console.log(name);
  if (token) {
    window.location.href = "/profile";
  }

  const callNameFunctions = (data) => {
    setName(data);
    validateDisplayName(data);
  };

  const callPhoneFunctions = (data) => {
    setPhoneNumber(data);
    validatePhoneNumber(data);
  };

  const callPasswordFunctions = (data) => {
    setPassword(data);
    validatePassword(data);
  };

  // Validate Display Name
  function validateDisplayName(e) {
    // Check Username
    const nameFormat = /^[0-9a-zA-Z]+$/;
    if (!e.match(nameFormat)) {
      setAlerts(["Display name can only contain letters & numbers"]);
    } else {
      setAlerts([]);
    }
  }

  // Validate Phone Number
  function validatePhoneNumber(e) {
    const strippedNumber = e.replace(/\D/g,'');
    const phoneformat = /^\d{10}$/;
    if (strippedNumber.length > 6 && !strippedNumber.match(phoneformat)) {
      setAlerts([
        "Error: That is not a valid phone number.  Make sure you use this pattern: 555-555-5555",
      ]);
    } else {
      setAlerts([]);
    }
  }
  // Validate Password
  function validatePassword(e) {

    // Validate the length of the password
    if (e.length < 6 || e.length > 35) {
      errors.push("Your Password must be between 6-35 characters.");
    }

    // Validate lower Case Letters in Password
    const lowerCaseLetters = /[a-z]/g;
    if (!e.match(lowerCaseLetters)) {
      errors.push("Your Password must contain at least one lowercase letter.");
    } 

    // Validate uppercase Letters in password
    const upperCaseLetters = /[A-Z]/g;
    if (!e.match(upperCaseLetters)) {
      errors.push("Your Password must contain at least one uppercase letter.");
    } 

    // Validate numbers
    const numbers = /[0-9]/g;
    if (!e.match(numbers)) {
      errors.push("Your Password must contain at least one number.");
    } 

    // Build the error message and set it to setAlert.
    let i;
    let alertErrors = "";
    for(i=0;i<errors.length;i++) {
      alertErrors = alertErrors + errors[i] + " ";
    }
    console.log(alertErrors);

    setAlerts([alertErrors]);
     
    
  }

  async function registerUser(event) {
    event.preventDefault();

    // Perform checks on username email and password

    if (errors.length > 0) {
      setAlerts(["Error: Some information was not validated. Please try again."])
    } else {
      const response = await fetch("http://localhost:1337/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          password,
        }),
      });

      const data = await response.json();

      if (data.status === "error") {
        setAlerts([data.error]);
      }

      if (data.status === "ok") {
        window.location.href = "/login";
      }
    }
  }

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Sign Up
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Create a New Account to get started.
            </p>
          </div>

          {alerts &&
            alerts.map((alert) => (
              <div className="text-red-600 w-full mb-2">
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  {alert}
                </p>
              </div>
            ))}

          <div className="flex lg:w-1/3 w-full mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
            <div className="relative sm:mb-0 flex-grow w-full">
              <label
                htmlFor="userName"
                className="leading-7 text-sm text-gray-400"
              >
                Display Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => callNameFunctions(e.target.value)}
                id="name"
                name="name"
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="flex lg:w-1/3 w-full mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
            <div className="relative sm:mb-0 flex-grow w-full">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-400"
              >
                Phone Number
              </label>
              <input
                type="phone"
                value={phone}
                onChange={(e) => callPhoneFunctions(e.target.value)}
                id="phone"
                name="phone"
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="flex lg:w-1/3 w-full mb-6 mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
            <div className="relative sm:mb-0 flex-grow w-full">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-400"
              >
                Create a Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => callPasswordFunctions(e.target.value)}
                name="password"
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="lg:w-1/3 w-full mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4 text-right">
            <button
              onClick={registerUser}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Sign Up
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
