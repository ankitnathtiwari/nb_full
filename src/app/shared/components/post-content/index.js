import React, { useState, useEffect } from "react";

export const PostContent = ({ post }) => {
  return (
    <div>
      <img src={post.post_image} />
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>{post.post_date}</p>
      <a href={post.external_link}>read more button</a>

      <div>
        <span>{post.like_count}likes </span>
        <span>{post.comment_count}comments</span>
      </div>
    </div>
  );
};
