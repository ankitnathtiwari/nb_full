import React, { useState, useEffect } from "react";
import { NavBottomSlideBar } from "../nav-bottom-slide-bar/nav-bottom-slide-bar";
import { NavTopBar } from "../nav-top-bar/nav-top-bar";
import { NavTopSlideBar } from "../nav-top-slide-bar/nav-top-slide-bar";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Body } from "../body/body";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className='top-nav'>
          <NavTopBar />
          <NavTopSlideBar />
        </div>
        <Body />
        <div className='nav-bottom-slide-bar'>
          <NavBottomSlideBar />
        </div>
      </div>
    </BrowserRouter>
  );
};
