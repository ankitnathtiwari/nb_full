import React, { useState, useEffect, useReducer } from "react";
import { Form } from "../../../shared/components/form";
import { initState } from "./init_state";
import { reducer } from "./reducer";
import { useFetch } from "./useFetch";
import "./index.css";
import { SearchLocation } from "../../../shared/components/search-location";
import { useRouteMatch } from "react-router";

export const Create = ({ globalState, globalDispatch }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  useFetch(state, dispatch, globalDispatch);
  console.log(useRouteMatch(), "create url");
  const locationHandler = (current, selected) => {
    dispatch({ type: "LOCATION_CHANGE", payload: { current, selected } });
  };
  const createFormStyle = () => {
    return state.changeLocation
      ? {
          opacity: "0.1",
        }
      : {
          opacity: "1",
        };
  };

  return (
    <div className='create'>
      {state.changeLocation ? (
        <div className='create-location'>
          <SearchLocation locationHandler={locationHandler} />
        </div>
      ) : null}

      <div className='create-form' style={createFormStyle()}>
        <p>Write News</p>

        <Form
          formItems={state.formItems}
          dispatch={dispatch}
          globalDispatch={globalDispatch}
        />
      </div>

      <p>{state.message}</p>
    </div>
  );
};
