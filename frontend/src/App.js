// import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashbar from './components/Dashbar';

const token = localStorage.getItem('token');
// let navigate = useNavigate();

function App() {
  return (
    <div>

        <Navbar />
          {token && <Dashbar token={token} />}
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" exact element={<Register />} />
                {token && <Route path="/profile" exact element={<Profile />} />}
             </Routes>
          <Footer />
      
    </div>
  );
}

export default App;
