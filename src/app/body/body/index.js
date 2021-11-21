import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Auth } from "../auth/auth";
import { Content } from "../content/";
import { TestContent } from "../testContent/test-content";

export const Body = ({ globalState, globalDispatch }) => {
  if (globalState.initLoading) {
    return <h1>Loading....</h1>;
  }

  const loadComponent = (globalState, globalDispatch) => {
    if (globalState.user.auth) {
      return (
        <Content globalState={globalState} globalDispatch={globalDispatch} />
      );
    } else {
      return <Auth globalState={globalState} globalDispatch={globalDispatch} />;
    }
  };

  return (
    <div
      onClick={() => globalDispatch({ type: "TOP_SIDE_BAR", payload: false })}>
      {loadComponent(globalState, globalDispatch)}
    </div>
  );
};
