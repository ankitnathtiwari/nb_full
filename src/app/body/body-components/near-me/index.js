import React, { useState, useEffect } from "react";
import { PostList } from "../../../shared/components/post-list";
export const NearMe = () => {
  return (
    <div>
      <h1>Near Me</h1>
      <PostList />
    </div>
  );
};
