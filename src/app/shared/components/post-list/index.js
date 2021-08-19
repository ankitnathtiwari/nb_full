import React, { useState, useEffect } from "react";
import { Post } from "../post";

export const PostList = ({ postListState, postListDispatch }) => {
  console.log(postListState.postList, "Post-List");

  return (
    <div>
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
