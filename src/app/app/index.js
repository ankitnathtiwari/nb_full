import React, { useState, useEffect, useReducer } from "react";
import { NavBottomSlideBar } from "../nav-bottom-slide-bar/nav-bottom-slide-bar";
import { NavTopBar } from "../nav-top-bar/nav-top-bar";
import { NavTopSlideBar } from "../nav-top-slide-bar/nav-top-slide-bar";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./index.css";
import { Body } from "../body/body";
import { initState } from "./init_state";
import { reducer } from "./reducer";
import { useFetch } from "./useFetch";
import { First } from "../body/testContent/child-component/first";
import { Second } from "../body/testContent/child-component/second";
export const globalStateContext = React.createContext();

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  useFetch(state, dispatch);

  return (
    <globalStateContext.Provider
      value={{ globalState: state, globalDispatch: dispatch }}>
      <BrowserRouter>
        <NavTopBar globalState={state} globalDispatch={dispatch} />
        <NavTopSlideBar globalState={state} globalDispatch={dispatch} />
        <Switch>
          <Route path='/'>
            <Body globalState={state} globalDispatch={dispatch} />
          </Route>
        </Switch>

        <NavBottomSlideBar globalState={state} globalDispatch={dispatch} />
      </BrowserRouter>
    </globalStateContext.Provider>
  );
};
