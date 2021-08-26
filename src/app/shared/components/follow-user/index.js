import React, { useState, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import { initState } from "./init_state";
import { useFetch } from "./useFetch";
export const FollowUserProfile = ({ user, followListDispatch }) => {
  //get user details with follow status
  //after clicking the follow button fetch data from backend by dispatch
  // and update the follow list by prop dispatch.
  //all the details should be filled from the state
  //updaate state with prop
  const [state, dispatch] = useReducer(reducer, user, initState);
  useFetch(state, dispatch, followListDispatch);
  console.log(state, "follow user");
  return (
    <div>
      <h2>{state.follow_user.image}</h2>
      <h2>{state.follow_user.name}</h2>
      <p>{state.follow_user.follow_count}</p>
      <button onClick={() => dispatch({ type: "FOLLOW_CLICKED" })}>
        {state.follow_user.follow_status ? "Following" : "+Follow"}
      </button>

      <p>{state.follow_user.rating}</p>
      <p>{state.follow_user.role}</p>
    </div>
  );
};
