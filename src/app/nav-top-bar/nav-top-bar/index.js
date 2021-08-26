import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavTopSideBar } from "../nav-top-side-bar";
import "./index.css";
export const NavTopBar = ({ globalState, globalDispatch }) => {
  return (
    <div className='nav-top' style={{ top: globalState.navbar.topNav }}>
      <h2 className='nav-top-logo'>NB</h2>
      <div className='nav-top-sidebar-icon'>
        <svg
          onClick={() => {
            globalDispatch({ type: "TOP_SIDE_BAR", payload: true });
          }}
          xmlns='http://www.w3.org/2000/svg'
          width='23'
          height='20'
          viewBox='0 0 23 20'>
          <path
            id='Menu'
            d='M-6160,20V17.142h14.376V20Zm0-8.571V8.571h23v2.858Zm0-8.571V0h23V2.858Z'
            transform='translate(6160)'
            fill='#fff'
          />
        </svg>
        {globalState.topNav.showSideBar ? <NavTopSideBar /> : null}
      </div>
    </div>
  );
};
