import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
export const NavBottomSlideBar = ({ globalState }) => {
  return (
    <div
      className='nav-bottom-slide-bar'
      style={{ bottom: globalState.navbar.bottomSlide }}>
      <Link to='/home'>Home</Link>
      <Link to='/create'>Create</Link>
      <Link to='/search'>Search</Link>
    </div>
  );
};
