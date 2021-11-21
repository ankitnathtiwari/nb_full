import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import { First } from "../child-component/first";
import { Second } from "../child-component/second";
export const TestContent = () => {
  return (
    <div>
      <Switch>
        <Route path='/first'>
          <First />
        </Route>
        <Route path='/second'>
          <Second />
        </Route>
        <Route path='/'>
          <Redirect to='/first' />
        </Route>
      </Switch>
    </div>
  );
};
