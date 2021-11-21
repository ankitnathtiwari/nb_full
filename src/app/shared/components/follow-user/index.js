import React, { useState, useEffect, useReducer } from "react";

import { reducer } from "./reducer";
import { initState } from "./init_state";
import { useFetch } from "./useFetch";
import "./index.css";
import { Link } from "react-router-dom";

export const FollowUserProfile = ({ user }) => {
  //get user details with follow status
  //after clicking the follow button fetch data from backend by dispatch
  // and update the follow list by prop dispatch.
  //all the details should be filled from the state
  //updaate state with prop
  const [state, dispatch] = useReducer(reducer, user, initState);
  useFetch(state, dispatch);

  console.log(state.user, "follow user profile");
  return (
    <div className='follow-user-profile'>
      <div className='follow-user-profile-img'>
        <img src={state.user.profile_pic} />
      </div>
      <div className='follow-user-profile-content'>
        <Link to={`/profile/${state.user.id}`}>{state.user.name}</Link>
        <p className='follow-user-profile-followers'>
          {state.user.follower_count} Followers
        </p>
        <p className='follow-user-profile-bio'>{state.user.bio}</p>
      </div>
      <div className='follow-user-profile-button'>
        <button onClick={() => dispatch({ type: "FOLLOW_CLICKED" })}>
          {state.user.follow_status ? "Following" : "+Follow"}
        </button>
      </div>

      {/* <p>{state.user.rating}</p>
      <p>{state.user.role}</p> */}
    </div>
  );
};
