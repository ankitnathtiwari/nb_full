import React, { useState, useEffect, useReducer } from "react";
import { useFetch } from "./useFetch";
import { initState } from "./init_state";
import { reducer } from "./reducer";
import { Link } from "react-router-dom";
import { forwardLink } from "./forward_link";
import moment from "moment";
import "./index.css";
import { pubDate } from "../../other-func/date-modifier";
import { PostAuthorButtons } from "../post-author-buttons";

export const PostAuthor = ({ globalState, post, postListDispatch }) => {
  const [state, dispatch] = useReducer(
    reducer,
    { post, globalState },
    initState
  );
  useFetch(state, dispatch, postListDispatch);

  return (
    <div className='post-author'>
      <div className='post-author-left'>
        <div className='post-content-profile_pic'>
          <Link to={state.routeAddress}>
            <img src={state.post.author.profile_pic} alt='author image' />
          </Link>
        </div>
        <div className='post-content-author-details'>
          <Link to={state.routeAddress}>{state.post.author.name}</Link>
          <div className='post-content-author-followers'>
            <span>{state.post.author.follower_count} followers</span>
          </div>
          <p>{pubDate(state.post.pub_date)}</p>
        </div>
      </div>
      <div className='post-content-follow-status'>
        <PostAuthorButtons post={state.post} dispatch={dispatch} />
      </div>
    </div>
  );
};
