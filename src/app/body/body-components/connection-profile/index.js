import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useRef,
} from "react";

import { Link, useParams, useLocation } from "react-router-dom";
import { globalStateContext } from "../../../app";
import { Home } from "../home";
import { UserInfo } from "../user-info";
import "./index.css";
import { reducer } from "./reducer";
import { initState } from "./init_state";
import { useFetch } from "./useFetch";
import { useParamChange } from "./useChangeParams";
import { ProfileEdit } from "../profile-edit";
import { useOpen } from "../../../shared/hooks/useOpen/index";
export const ConnectionProfile = () => {
  const { isOpen, handleOpen, editRef } = useOpen();
  const { globalState, globalDispatch } = useContext(globalStateContext);
  const [state, dispatch] = useReducer(reducer, initState);
  useParamChange(dispatch);
  useFetch(state, dispatch);

  const editComponent = () => {
    if (state.editProfile) {
      return <ProfileEdit />;
    } else {
      return null;
    }
  };

  return (
    <div className='my-profile'>
      <div ref={editRef}>
        {isOpen ? (
          <div className='edit-compo'>
            <ProfileEdit />
          </div>
        ) : null}
      </div>

      <div>
        <UserInfo
          user={state.user}
          dispatch={dispatch}
          handleOpen={handleOpen}
        />
        <div className='my-profile-post'>
          <h4>{state.user.name}'s Posts</h4>
          <Home globalState={globalState} globalDispatch={globalDispatch} />
        </div>
      </div>
    </div>
  );
};
