import React, { useState, useEffect } from "react";
import { PostList } from "../../../shared/components/post-list";
export const HotTopics = () => {
  return (
    <div>
      <h1>Hot Topics</h1>
      <PostList />
    </div>
  );
};
