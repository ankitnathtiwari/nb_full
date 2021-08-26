import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink, Link, useRouteMatch } from "react-router-dom";

import "./index.css";

export const NavTopSideBar = () => {
  const auth = true;
  const afterAuthMenu = () => {
    return (
      <div className='nav-top-side-bar'>
        <Link to='/profile/my'>Hi User</Link>
        <Link to='/profile/my'>Profile</Link>
        <Link to='/location'>Change Location</Link>
        <Link to='/location'>Help</Link>
        <button>Close</button>
      </div>
    );
  };

  const beforeAuthMenu = () => {
    return (
      <div className='nav-top-side-bar'>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='/password_forgot'>Forgot Password</Link>
        <Link to='/password_change'>Password Change</Link>
        <button>Close</button>
      </div>
    );
  };
  if (auth) {
    return afterAuthMenu();
  }
  return <div>{beforeAuthMenu()}</div>;
};
