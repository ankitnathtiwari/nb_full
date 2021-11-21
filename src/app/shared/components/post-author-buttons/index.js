import React, { useState, useEffect, useContext } from "react";
import { globalStateContext } from "../../../app";

export const PostAuthorButtons = ({ dispatch, post }) => {
  //if post.author.id === globle user id then return delete button
  // else return follow button
  const { globalState, globalDispatch } = useContext(globalStateContext);
  if (post.author.id === globalState.user.user.id) {
    return (
      <button
        onClick={() =>
          dispatch({ type: "DELETE_CLICKED", payload: { post_id: post._id } })
        }>
        Delete
      </button>
    );
  }
  return (
    <button
      onClick={() =>
        dispatch({ type: "FOLLOW_CLICKED", payload: { post_id: post._id } })
      }>
      {post.author.follow_status ? " Following " : "+ Follow"}
    </button>
  );
};
