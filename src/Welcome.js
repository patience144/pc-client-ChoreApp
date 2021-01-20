import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

export default function Welcome() {
  return (
    <div className='welcome'>
      <h2>Let's make Chores Easier!!!</h2>
      <h3>
        Welcome to the Chore App! A place where you can create a list of your
        chores and work through them digitally! You can add a chore by clicking
        the "Click Here to Start!" link. Once you create a new link and click
        the "Add" button, you will be directed to the Chore List. Here on the
        Chore list page, you can edit a chore, delete a chore, or simply check
        it off for the day! Ready to begin?
      </h3>
      <Link to='/add'>Click Here to Start!</Link>
    </div>
  );
}
