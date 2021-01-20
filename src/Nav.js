import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const navStyle = {
    color: "black",
  };

  return (
    <div className='nav'>
      <Link to='/'>
        <h1>Chore App</h1>
      </Link>
      <ul className='nav-list'>
        <li>
          <Link style={navStyle} to='/about'>
            About
          </Link>
        </li>
        <li>
          <Link style={navStyle} to='/chores'>
            Chore List
          </Link>
        </li>
        <li>
          <Link style={navStyle} to='/add'>
            Add Chores
          </Link>
        </li>
      </ul>
    </div>
  );
}
