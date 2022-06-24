// import navIcon from "../assets/images/icon.png";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ token }) => {
  /*const [login, setLogin] = useState(["/login", "Login"]);

  // Set login to either login or logout
  function processLoginOrOut() {
    if (login[1] && login[0] === "/login") {
      window.location.href = "/login";
    } else {
      localStorage.removeItem("token");
      setLogin(["/logout", "Logout"]);
      window.location.href = "/";
    }
  }

  useEffect(() => {
    if(token) {
      setLogin(["/logout", "Logout"]);
    }
  },[token]); */

  /*  Paste this code into the return function and uncomment the functions above before continueing to develop

  <button
          onClick={() => processLoginOrOut()}
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          {login[1]}
        </button>*/

  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 rounded-full"
            viewBox="0 0 55 55"
          >
            <image src="https://dummyimage.com/420x260" width="55" height="55" />
          </svg>
          <span className="ml-3 text-xl font-mythic">Blackleaf Homes LLC</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-white" to="/">
            Home
          </Link>
        </nav>
        
        
        
      </div>
    </header>
  );
};

export default Navbar;
