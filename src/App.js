import React from 'react';
import './App.css';
import './btn.css';
import { BrowserRouter as Router, Link, Routes } from 'react-router-dom';
import Mobiles from './components.js/Mobiles';
import Fashion from './components.js/Fashion';
import Furniture from './components.js/Furniture';
import Electronics from './components.js/Electronics';
import Beauty from './components.js/Beauty';
import TVs from './components.js/TVs';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src="https://www.logolynx.com/images/logolynx/ee/eeebd6f03cea172ad149f2095d575de0.png"
                alt="Logo"
                width="150"
                height="50"
                className="d-inline-block align-text-top"
              />
            </a>

            <a className="navbar-brand" href="/">
              Welcome to Online Shopping
            </a>

            <div className="position-absolute top-50 start-50 translate-middle">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
                <li></li>
                <a className="navbar-brand" href="/">
                  Sign In
                </a>
                <a className="navbar-brand" href="/">
                  Sign Up
                </a>
                <a className="navbar-brand" href="/">
                  Cart
                </a>
              </form>
            </div>
          </div>
        </nav>

        <div>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Mobiles">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0a0243119f02f7a5.png?q=100" alt="Logo" width="75" height="75" className="d-inline-block align-text-top" />
                <p>Mobiles & Tablets</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Electronics">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/da4491af4ee551d6.png?q=100" alt="Logo" width="75" height="75" className="d-inline-block align-text-top" />
                <p>Electronics</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/TVs">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/7a9da987f315df35.png?q=100" alt="Logo" width="75" height="75" className="d-inline-block align-text-top" />
                <p>Tvs & Appliances</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Beauty">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/e83a5f27b01d9a7e.png?q=100" alt="Logo" width="75" height="75" className="d-inline-block align-text-top" />
                <p>Beauty</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Fashion">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f7b2a4eeb35a8c9f.png?q=100" alt="Logo" width="75" height="75" className="d-inline-block align-text-top" />
                <p>Fashion</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Furniture">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/4e0bdf8567ecb960.png?q=100" alt="Logo" width="75" height="75" className="d-inline-block align-text-top" />
                <p>Furniture</p>
              </Link>
            </li>
          </ul>
        </div>

        <Routes exact path="/" element={<Home/>} />
        <Routes path="/Mobiles"element={<Mobiles/>} />
        <Routes path="/Electronics" element={<Electronics/>} />
        <Routes path="/TVs" element={<TVs/>} />
        <Routes path="/Beauty" element={<Beauty/>} />
        <Routes path="/Fashion" element={<Fashion/>} />
        <Routes path="/Furniture" element={<Furniture/>} />
      </div>
    </Router>
  );
}

const Home = () => {
  return <h1>Home Page Content</h1>; // Replace with your desired content for the home page
};

export default App;
