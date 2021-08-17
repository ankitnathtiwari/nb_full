import React, { useState, useEffect } from "react";
import { PostAuthor } from "../post-author";
import { PostContent } from "../post-content";
import { PostLikeBar } from "../post-like-bar";
export const Post = () => {
  return (
    <div>
      <PostAuthor />
      <div>-----------</div>
      <PostContent />
      <div>---------</div>
      <PostLikeBar />
    </div>
  );
};
