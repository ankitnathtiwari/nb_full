import { FollowUserProfile } from "../follow-user";
import React, { useState, useEffect, useReducer } from "react";
import { initState } from "./init_state";
import { reducer } from "./reducer";
import { useFetch } from "./useFetch";
import { useLocation } from "react-router";
import { useParamChange } from "./useChangeParams";

export const FollowList = () => {
  //get user id from the url
  //update state
  //usefetch with the same id
  const [state, dispatch] = useReducer(reducer, initState);
  useFetch(state, dispatch);

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
