import React, { useState, useEffect } from "react";
export const PostLikeBar = ({ postListDispatch }) => {
  return (
    <div>
      <button>Like</button>
      <button>Comment</button>
      <button>Share</button>
      <button>Rate the Post</button>
    </div>
  );
};
