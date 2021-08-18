import React, { useState, useEffect, useReducer } from "react";
import { Form } from "../../../shared/components/form";
import { initState } from "./init_state";
import { reducer } from "./reducer";
import { useFetch } from "./useFetch";
export const PasswordChange = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  useFetch(state, dispatch);

  return (
    <div>
      <h2>PasswordChange </h2>
      <Form formItems={state.formItems} dispatch={dispatch} />
      <p>{state.message}</p>
    </div>
  );
};
