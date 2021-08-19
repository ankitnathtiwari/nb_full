import React, { useState, useEffect } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { Home } from "../body-components/home";
import { NearMe } from "../body-components/near-me";
import { Followers } from "../body-components/followers";
import { Followings } from "../body-components/followings";

import { Location } from "../body-components/location";
import { MyPost } from "../body-components/my-posts";
import { MyProfile } from "../body-components/my-profile";
import { Create } from "../body-components/create";
import { ConnectionProfile } from "../body-components/connection-profile";
import { HotTopics } from "../body-components/hot-topics";

export const Content = ({ globalState, globalDispatch }) => {
  return (
    <div>
      <Switch>
        <Route path='/hot_topics'>
          <HotTopics />
        </Route>
        <Route path='/near_me'>
          <NearMe />
        </Route>
        <Route path='/followers'>
          <Followers />
        </Route>
        <Route path='/followings'>
          <Followings />
        </Route>
        <Route path='/location'>
          <Location />
        </Route>
        <Route path='/my_posts'>
          <MyPost />
        </Route>
        <Route path='/create'>
          <Create />
        </Route>
        <Route path='/connection_profile'>
          <ConnectionProfile />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/'>
          <Redirect to={globalState.user.auth ? "/home" : "/login"} />
        </Route>
      </Switch>
    </div>
  );
};
