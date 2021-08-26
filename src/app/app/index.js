import React, { useState, useEffect, useReducer } from "react";
import { NavBottomSlideBar } from "../nav-bottom-slide-bar/nav-bottom-slide-bar";
import { NavTopBar } from "../nav-top-bar/nav-top-bar";
import { NavTopSlideBar } from "../nav-top-slide-bar/nav-top-slide-bar";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Body } from "../body/body";
import { initState } from "./init_state";
import { reducer } from "./reducer";
import { useFetch } from "./useFetch";

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  useFetch(state, dispatch);

  return (
    <BrowserRouter>
      <div>
        <NavTopBar globalState={state} globalDispatch={dispatch} />
        <NavTopSlideBar globalState={state} globalDispatch={dispatch} />
        <Body globalState={state} globalDispatch={dispatch} />
        <NavBottomSlideBar globalState={state} globalDispatch={dispatch} />
      </div>
    </BrowserRouter>
  );
};
