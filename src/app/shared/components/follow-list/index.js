import { FollowUserProfile } from "../follow-user";
import React, { useState, useEffect, useReducer } from "react";
import { initState } from "./init_state";
import { reducer } from "./reducer";
import { useFetch } from "./useFetch";
import { useLocation } from "react-router";

export const FollowList = () => {
  //get the user details of the and fetch followers list from the backend update ui
  //if user followed or unfollowed update list
  const query = new URLSearchParams(useLocation().search);

  const [state, dispatch] = useReducer(
    reducer,
    { userId: query.get("id"), path: useLocation().pathname },
    initState
  );

  useFetch(state, dispatch);
  console.log(state, "follow list");
  return state.followList.map((user) => {
    return (
      <FollowUserProfile
        user={user}
        followListDispatch={dispatch}
        key={user.id}
      />
    );
  });
};
