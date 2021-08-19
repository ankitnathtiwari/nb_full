import React, { useState, useEffect, useReducer } from "react";
import { Link, Redirect, Route, Switch, useLocation } from "react-router-dom";
import { PostList } from "../../../shared/components/post-list";
import { reducer } from "./reducer";
import { initState } from "./init_state";
import { useFetch } from "./useFetch";

export const Home = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  useFetch(state, dispatch);

  console.log(state, "home state");

  return (
    <div>
      <h1>Home</h1>
      <PostList postListState={state} postListDispatch={dispatch} />
    </div>
  );
};
