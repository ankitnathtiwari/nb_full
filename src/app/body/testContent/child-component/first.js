import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";

export const First = () => {
  const match = useRouteMatch();
  console.log(useRouteMatch(), "first route match");
  return (
    <div>
      <Switch>
        <Route path={`${match.url}/first`}>
          <h1>First First</h1>
        </Route>
        <Route path={`${match.url}/second`}>
          <h1>First Second</h1>
        </Route>
        <Route path='/'>
          <Redirect to={`${match.url}/first`} />
        </Route>
      </Switch>
    </div>
  );
};
