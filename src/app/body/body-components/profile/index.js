import React, { useState, useEffect, useContext, useReducer } from "react";
import { Redirect, Switch, Route, useRouteMatch } from "react-router-dom";
import { globalStateContext } from "../../../app";

import "./index.css";

import { MyProfile } from "../my-profile";
import { ConnectionProfile } from "../connection-profile";

export const Profile = () => {
  const match = useRouteMatch();
  const { globalState, globalDispatch } = useContext(globalStateContext);
  return (
    <Switch>
      <Route path={`${match.url}/:id`}>
        <ConnectionProfile />
      </Route>

      <Route path='/'>
        <Redirect to={`${match.url}/${globalState.user.user.id}`} />
      </Route>
    </Switch>
  );
};
