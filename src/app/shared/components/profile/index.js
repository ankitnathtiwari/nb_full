import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const Profile = () => {
  return (
    <div>
      <h2>Profile Picture</h2>
      <Link to='/followers'>Follower: 40</Link>
      <Link to='/following'>Following: 56</Link>
      <p>+Follow/Following</p>
      <p>rating</p>
      <p>Info</p>
      <h2>All post by the user</h2>
      <p>Recent Activity</p>
    </div>
  );
};
