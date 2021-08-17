import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
export const Scroll = ({ displayNavTop, handleDisplay }) => {
  const [previousPositionY, setPreviousPositionY] = useState(0);
  const handleScroll = () => {
    const currentPositionY = window.pageYOffset;
    if (previousPositionY > currentPositionY) {
      handleDisplay(false);
      setPreviousPositionY(currentPositionY);
    } else {
      handleDisplay(true);
      setPreviousPositionY(currentPositionY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      //clear subscription and asynchronous task
      //some memory leak is happening here i don't know why?
      window.removeEventListener("scroll", handleScroll);
    };
  }, [previousPositionY]);
  return <div></div>;
};
