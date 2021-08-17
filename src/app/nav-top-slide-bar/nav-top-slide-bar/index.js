import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Topics } from "../Topics";
export const NavTopSlideBar = () => {
  return (
    <div>
      <Link to='/near_me'>Near Me</Link>
      <Topics />
      <Link to='/hot_topics'>Hot Topics</Link>
    </div>
  );
};
