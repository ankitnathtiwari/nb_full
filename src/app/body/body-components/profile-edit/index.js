import React, { useState, useEffect, useReducer } from "react";
import "./index.css";

import { Form } from "../../../shared/components/form/index";
import { useFetch } from "./useFetch";
import { initState } from "./init_state";
import { reducer } from "./reducer";
export const ProfileEdit = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  useFetch(state, dispatch);
  return (
    <div>
      <div className='profile-edit'>
        <p>Edit Profile</p>
        <Form formItems={state.formItems} dispatch={dispatch} />
      </div>

      <p>{state.message}</p>
    </div>
  );
};
