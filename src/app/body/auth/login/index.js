import React, { useState, useEffect, useReducer } from "react";
import { Form } from "../../../shared/components/form";
import { initState } from "./init_state";
import { reducer } from "./reducer";
import { useFetch } from "./useFetch";

export const Login = ({ globalState, globalDispatch }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state);
  return (
    <div>
      <h2>Login </h2>
      <Form
        formItems={state.formItems}
        dispatch={dispatch}
        globalDispatch={globalDispatch}
      />
    </div>
  );
};
