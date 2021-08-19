import React, { useState, useEffect } from "react";
import { PostAuthor } from "../post-author";
import { PostContent } from "../post-content";
import { PostLikeBar } from "../post-like-bar";
export const Post = ({ post, postListDispatch }) => {
  return (
    <div>
      <PostAuthor post={post} />
      <div>-----------</div>
      <PostContent post={post} />
      <div>---------</div>
      <PostLikeBar post={post} />
    </div>
  );
};
