import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import { Profile } from "../../../shared/components/profile";
import { Followings } from "../followings";

export const ConnectionProfile = () => {
  return (
    <div>
      <h1>Connection Profile</h1>

      <Profile profile={useLocation().state} />
    </div>
  );
};
