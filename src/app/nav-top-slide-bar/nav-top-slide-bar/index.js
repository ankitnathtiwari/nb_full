import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Topics } from "../Topics";
import "./index.css";

export const NavTopSlideBar = ({ globalState, globalDispatch }) => {
  return (
    <div
      className='nav-top-slide-bar'
      style={{ top: globalState.navbar.topSlide }}>
      {/* <Topics globalDispatch={globalDispatch} /> */}
      <Link to='/near_me'>Near Me</Link>
      <Link to='/hot_topics'>Hot Topics</Link>
    </div>
  );
};
