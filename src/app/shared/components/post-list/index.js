import React, { useState, useEffect } from "react";
import { Post } from "../post";
import "./index.css";
export const PostList = ({
  globalState,
  globalDispatch,
  postListState,
  postListDispatch,
}) => {
  return (
    <div className='post-list'>
      {postListState.postList.map((post) => {
        return (
          <Post
            key={post._id}
            post={post}
            postListDispatch={postListDispatch}
          />
        );
      })}
    </div>
  );
};
