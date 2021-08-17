import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const NavTopBar = () => {
  return (
    <div>
      <Link to='/home'>Logo</Link>
      <button>Notification</button>
      <div>
        <h2>Burger Icon</h2>
        <Link to='/profile/my'>Hi User</Link>
        <Link to='/location/change'>Change Location</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='/password_forgot'>Forgot Password</Link>
        <Link to='/password_change'>Password Change</Link>
      </div>
    </div>
  );
};
