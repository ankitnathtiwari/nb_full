import React, { useState, useEffect, useReducer } from "react";
import { Link, Redirect, Route, Switch, useLocation } from "react-router-dom";
import { PostList } from "../../../shared/components/post-list";
import { reducer } from "./reducer";
import { initState } from "./init_state";
import { useFetch } from "./useFetch";
import { useScroll } from "./useScroll";

export const Home = ({ globalState, globalDispatch }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  useScroll(state, globalDispatch);
  useFetch(state, dispatch);

  return (
    <div>
      <PostList
        globalState={globalState}
        globalDispatch={globalDispatch}
        postListState={state}
        postListDispatch={dispatch}
      />
    </div>
  );
};
