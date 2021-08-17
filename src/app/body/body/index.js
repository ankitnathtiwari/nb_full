import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Auth } from "../auth/auth";
import { Content } from "../content";
export const Body = () => {
  const [auth, setAuth] = useState(true);

  const loadComponnt = (auth) => {
    if (auth) {
      return <Content auth={auth} />;
    } else {
      return <Auth />;
    }
  };

  return (
    <div>
      <Route path='/'>{loadComponnt(auth)}</Route>
    </div>
  );
};
