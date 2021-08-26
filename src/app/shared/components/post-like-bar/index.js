import React, { useState, useEffect, useReducer } from "react";
import { initState } from "./init_state";
import { reducer } from "./reducer";
import { useFetch } from "./useFetch";
import "./index.css";

export const PostLikeBar = ({ post, postListDispatch }) => {
  const [state, dispatch] = useReducer(reducer, post, initState);
  useFetch(state, dispatch, postListDispatch);

  return (
    <div className='post-like-bar'>
      <div className='post-like-bar-count'>
        <span>{`${post.like.like_count} Likes`} </span>
      </div>
      <div className='post-like-bar-buttons'>
        <button
          onClick={() =>
            dispatch({ type: "LIKE_CLICKED", payload: { post_id: post._id } })
          }>
          {post.like.like_status ? "Liked" : "Like"}
        </button>
        <button>Share</button>
      </div>
    </div>
  );
};
