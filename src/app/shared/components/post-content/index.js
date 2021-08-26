import React, { useState, useEffect } from "react";
import "./index.css";
export const PostContent = ({ post }) => {
  return (
    <div className='post-content'>
      <img src={post.post_image} />
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div className='post-content-link'>
        <a href={post.external_link} target='_blank' rel='noopener noreferrer'>
          Read More...
        </a>
      </div>
    </div>
  );
};
