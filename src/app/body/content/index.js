import React, { useState, useEffect } from "react";
import { Route, Link, Switch, Redirect, useRouteMatch } from "react-router-dom";
import { Home } from "../body-components/home";
import { NearMe } from "../body-components/near-me";
import { Followers } from "../body-components/followers";
import { Followings } from "../body-components/followings";
import { Location } from "../body-components/location";
import { MyPost } from "../body-components/my-posts";
import { Create } from "../body-components/create";
import { Profile } from "../body-components/profile/index";
import { HotTopics } from "../body-components/hot-topics";

export const Content = ({ globalState, globalDispatch }) => {
  return (
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
      <Route path='/following'>
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

      <Route path='/profile'>
        <Profile />
      </Route>

      <Route path='/home'>
        <Home globalState={globalState} globalDispatch={globalDispatch} />
      </Route>
      <Route path='/'>
        {/* <Redirect to='/profile' /> */}
        <Redirect to={globalState.user.auth ? "/profile" : "/login"} />
      </Route>
    </Switch>
  );
};
