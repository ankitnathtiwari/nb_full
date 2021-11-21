import React, { useState, useEffect, useContext } from "react";
import { Link, Switch } from "react-router-dom";
import { globalStateContext } from "../../../app";
import { Home } from "../home";
import { UserInfo } from "../user-info";
import "./index.css";

export const MyProfile = () => {
  const { globalState, globalDispatch } = useContext(globalStateContext);

  //profile details and edit options
  //my post component
  return (
    <div className='my-profile'>
      <UserInfo user={globalState.user.user} />
      <div className='my-profile-post'>
        <h4>My Posts</h4>
        <Home globalState={globalState} globalDispatch={globalDispatch} />
      </div>
    </div>
  );
};
