import React, { useState, useEffect, useReducer } from "react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import { initState } from "./init_state";
import { reducer } from "./reducer";
import { useFetch } from "./useFetch";

export const ConnectionProfile = ({ profile }) => {
  const query = new URLSearchParams(useLocation().search);

  console.log(profile, "profile page");
  const [state, dispatch] = useReducer(
    reducer,
    { basicProfile: profile, profile_id: query.get("id") },
    initState
  );
  useFetch(state, dispatch);

  //get the basic profile details from the Link (profile_id, and update the basic details
  //do fetch and get 2 posts after clicking on load more get 10 more posts and repeat
  console.log(useLocation(), "profile compo");
  return (
    <div>
      <img src={state.profile_pic} alt='profile pic' />
      <Link
        to={{
          pathname: "/followers",
          search: `?id=${state.profile.id}`,
        }}>{`Followers  ${state.profile.follower_count}  `}</Link>
      <Link
        to={{
          pathname: "/followings",
          search: `?id=${state.profile.id}`,
        }}>{`Following  ${state.profile.follwing_count} `}</Link>

      <a href='https://www.google.com/'>Link To Personal Site</a>
      <p>Joined Date</p>
      <p>Current Location:Place:</p>
      <p>Mutual Followers/Followings</p>

      <button
        onClick={() => {
          dispatch({ type: "FOLLOW_CLICKED" });
        }}>
        {state.profile.follow_status ? "Following" : "+Follow"}
      </button>
      <p>{`Rating : ${state.profile.rating}`}</p>
      <p>Info</p>
      <h2>Posts: </h2>
      <p>Recent Activity</p>
    </div>
  );
};
