import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const jwt = require('jsonwebtoken');

const Dashbar = ({ token }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    if(token) {
 
      const decoded = jwt.verify(token, process.env.REACT_APP_SECRET_KEY);
      setUser(decoded);

    }
  },[token]);

  return (
    <header className="text-gray-400 bg-amber-700 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >Welcome {user.name}!
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-white" to="/ranch-office">
            Ranch Office
          </Link>
          <Link className="mr-5 hover:text-white" to="/breedstall">
            Breed Stall
          </Link>
          <Link className="mr-5 hover:text-yellow-600" to="/whitepaper">
            Whitepaper
          </Link>
          <Link className="mr-5 hover:text-yellow-600" to="/saleyard">
            Sale Yard
          </Link>
        </nav>
        
      </div>
    </header>
  );
};

export default Dashbar;
