import React, { useState, useEffect, useReducer } from "react";
import { Form } from "../../../shared/components/form";
import { useFetch } from "./useFetch";
import { initState } from "./init_state";
import { reducer } from "./reducer";

export const Register = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  useFetch(state, dispatch);

  return (
    <div>
      <h2>Register </h2>
      <Form formItems={state.formItems} dispatch={dispatch} />
      <p>{state.message}</p>
    </div>
  );
};
