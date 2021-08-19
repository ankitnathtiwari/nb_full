import React, { useState, useEffect } from "react";

export const PostAuthor = ({ post }) => {
  return (
    <div>
      <h2>{post.author.name}</h2>

      <div>
        <span>{post.author.follower_count}</span>
        <span>{post.author.rating}</span>
      </div>
      <p>{post.author.follow_status}</p>
      <p>{post.author.role}</p>
    </div>
  );
};
