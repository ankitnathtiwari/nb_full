import React, { useState, useEffect } from "react";
import { PostAuthor } from "../post-author";
import { PostContent } from "../post-content";
import { PostLikeBar } from "../post-like-bar";
import "./index.css";
export const Post = ({ globalState, post, postListDispatch }) => {
  return (
    <div className='post'>
      <PostAuthor
        globalState={globalState}
        post={post}
        postListDispatch={postListDispatch}
      />
      <PostContent post={post} postListDispatch={postListDispatch} />
      <PostLikeBar post={post} postListDispatch={postListDispatch} />
    </div>
  );
};
