import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Auth } from "../auth/auth";
import { Content } from "../content";
export const Body = ({ globalState, globalDispatch }) => {
  const loadComponent = (globalState, globalDispatch) => {
    if (globalState.auth) {
      return (
        <Content globalState={globalState} globalDispatch={globalDispatch} />
      );
    } else {
      return <Auth globalState={globalState} globalDispatch={globalDispatch} />;
    }
  };

  return (
    <div>
      <Route path='/'>{loadComponent(globalState, globalDispatch)}</Route>
    </div>
  );
};
