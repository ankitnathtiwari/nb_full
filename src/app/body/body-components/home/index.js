import React, { useState, useEffect } from "react";
import { Link, Redirect, Route, Switch, useLocation } from "react-router-dom";
import { PostList } from "../../../shared/components/post-list";

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <PostList />
    </div>
  );
};
