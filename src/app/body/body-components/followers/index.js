import React, { useState, useEffect, useContext } from "react";
import {
  Redirect,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router";
import "./index.css";
import { globalStateContext } from "../../../app";

import { FollowList } from "../../../shared/components/follow-list";
export const Followers = () => {
  const match = useRouteMatch();
  const { globalState, globalDispatch } = useContext(globalStateContext);

  return (
    <div className='follow-list'>
      <Switch>
        <Route path={`${match.url}/:id`}>
          <FollowList />
        </Route>
        <Route path='/'>
          <Redirect to={`${match.url}/${globalState.user.user.id}`} />
        </Route>
      </Switch>
    </div>
  );
};
