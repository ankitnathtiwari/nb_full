import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { Login } from "../login";
import { PasswordChange } from "../password-change";
import { PasswordForgot } from "../password-forgot";
import { Register } from "../register";

export const Auth = () => {
  return (
    <div>
      <Switch>
        <Route path={`/login`}>
          <Login />
        </Route>
        <Route path={`/register`}>
          <Register />
        </Route>
        <Route path={`/password_change`}>
          <PasswordChange />
        </Route>
        <Route path={`/password_forgot`}>
          <PasswordForgot />
        </Route>
        <Route path='/'>
          <Redirect to='/login' />
        </Route>
      </Switch>
    </div>
  );
};
