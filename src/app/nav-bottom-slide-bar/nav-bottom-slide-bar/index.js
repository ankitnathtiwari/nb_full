import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const NavBottomSlideBar = () => {
  return (
    <div>
      <Link to='/home'>Home</Link>
      <Link to='/create'>Create</Link>
      <Link to='/search'>Search</Link>
    </div>
  );
};
