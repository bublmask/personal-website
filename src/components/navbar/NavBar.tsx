import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navbar.css';
import pfp from '../../imgs/pfp.jpeg';

function NavBar() {
  const [count, setCount] = useState(0);
  return (
    <div className="navbar-root-container">
      <Link className="profile-link" to="/">
        <div className="profile">
          <img className="profile-pic" src={pfp} alt="PFP" />
          <text className="logo">mask.</text>
        </div>
      </Link>
      {/*<div>
        <Link className="link" to="/home">
          home
        </Link>
        <Link className="link" to="/about">about</Link>
        <Link className="link" to="/contact">contact</Link>
      </div>*/}
      {/*<div>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click to increase count
      </button>
      <div className="link">{count}</div>
      </div>*/}
    </div>
  );
}

export default NavBar;
