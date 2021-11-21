import React, { useState, useEffect, useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import { globalStateContext } from "../../../app";
import { Home } from "../home";
import "./index.css";
import { initState } from "./init_state";
import { reducer } from "./reducer";
export const UserInfo = ({ user, dispatch, handleOpen }) => {
  const { globalState, globalDispatch } = useContext(globalStateContext);

  //profile details and edit options
  //my post component
  const rightButton = () => {
    if (user.id === globalState.user.user.id) {
      return (
        <div className='my-profile-edit'>
          <button onClick={handleOpen}>Edit Profile</button>
        </div>
      );
    } else {
      return (
        <div className='my-profile-edit'>
          <button onClick={() => dispatch({ type: "FOLLOW_CLICKED" })}>
            +Follow
          </button>
        </div>
      );
    }
  };

  return (
    <div className='my-profile-upper'>
      <div className='profile-pic'>
        <img src={user.profile_pic} />
      </div>
      <div className='my-profile-name'>
        <div>
          <h4>{user.name}</h4>
          <p>Location</p>
        </div>
        {rightButton()}
      </div>
      <div className='my-profile-bio'>
        <h4>Bio</h4>
        <p>{user.bio}</p>
      </div>
      <div className='my-profile-followers'>
        <div>
          <Link to={`/followers/${user.id}`}>Followers</Link>

          <p>{user.follower_count}</p>
        </div>
        <div>
          <Link to='/followers'>Followings</Link>

          <p>{user.follwing_count}</p>
        </div>
      </div>
    </div>
  );
};
