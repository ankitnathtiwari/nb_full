import React, { useState, useEffect, useReducer } from "react";
import { useFetch } from "./useFetch";
import { initState } from "./init_state";
import { reducer } from "./reducer";
import { Link } from "react-router-dom";
import { forwardLink } from "./forward_link";
import moment from "moment";
import "./index.css";
import { pubDate } from "../../other-func/date-modifier";
export const PostAuthor = ({ post, postListDispatch }) => {
  const [state, dispatch] = useReducer(reducer, post, initState);
  useFetch(state, dispatch, postListDispatch);

  return (
    <div className='post-author'>
      <div className='post-author-left'>
        <div className='post-content-profile_pic'>
          <Link to={forwardLink(post)}>
            <img src={post.author.profile_pic} alt='author image' />
          </Link>
        </div>
        <div className='post-content-author-details'>
          <Link to={forwardLink(post)}>{post.author.name}</Link>
          <div className='post-content-author-followers'>
            <span>{post.author.follower_count} followers</span>
          </div>
          <p>{pubDate(post.pub_date)}</p>
        </div>
      </div>
      <div className='post-content-follow-status'>
        <button
          onClick={() =>
            dispatch({ type: "FOLLOW_CLICKED", payload: { post_id: post._id } })
          }>
          {post.author.follow_status ? " Following " : "+ Follow"}
        </button>
      </div>
    </div>
  );
};
