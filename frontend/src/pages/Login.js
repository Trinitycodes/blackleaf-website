import { useEffect, useState } from 'react';
const jwt = require('jsonwebtoken');

function Login({ web3Handler, account, accounts}) {
  const [phone, setPhone] = useState('');
  const [password,setPassword] = useState('');
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      window.location = "/ranch-office" ;
    }
  })

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone,
        password,
      }),
    })

    const data = await response.json();

    // if there was an error on the server, then display an error message and 
    // end the process.
    if (data.status === 'error') {
      setAlerts(["Well, that didn't work!  Please check your Phone Number and Password."]);
      return;
    }

    // decode the token sent from the server and check 
    // to make sure that it contains the correct data.
    const decoded = jwt.verify(data.user, process.env.REACT_APP_SECRET_KEY);
    if (decoded.name && decoded.phone) {
      alert(decoded.name);
    }
    // if the response from server has a user, then set user as token
    if (data.user) {
      localStorage.setItem('token', data.user)
      window.location.href = '/ranch-office';
    } else {
      setAlerts(['Please check your username and password']);
    }
  }

  return (
    <div className="App">

      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Login</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Login with Email and Password or Connect with Metamask.</p>
          </div>
          {alerts &&
            alerts.map((alert) => (
              <div className="text-red-600 w-full mb-2">
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  {alert}
                </p>
              </div>
            ))}
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
            <div className="relative sm:mb-0 flex-grow w-full">
              <label htmlFor="phone-number" className="leading-7 text-sm text-gray-400">Phone Number</label>
              <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" name="phone" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative sm:mb-0 flex-grow w-full">
              <label htmlFor="password" className="leading-7 text-sm text-gray-400">Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button onClick={loginUser} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Login;