import React, { useState, useEffect } from "react";
import { useLocation, useRouteMatch } from "react-router-dom";

export const useScroll = (state, globalDispatch) => {
  const [previousPositionY, setPreviousPositionY] = useState(0);

  const path = useRouteMatch();

  const handleScroll = () => {
    const currentPositionY = window.pageYOffset;

    if (previousPositionY > currentPositionY) {
      setPreviousPositionY(currentPositionY);
      globalDispatch({
        type: "HIDE_NAV_BAR",
        payload: { topNav: "-50px", topSlide: "-90px", bottomSlide: "-40px" },
      });
    } else {
      setPreviousPositionY(currentPositionY);
      globalDispatch({
        type: "HIDE_NAV_BAR",
        payload: { topNav: "0px", topSlide: "0px", bottomSlide: "0px" },
      });
    }
  };

  useEffect(() => {
    console.log("use scroll effect called");
    window.addEventListener("scroll", handleScroll);

    return () => {
      console.log("use scroll unmounted");
      //clear subscription and asynchronous task
      //some memory leak is happening here i don't know why?
      window.removeEventListener("scroll", handleScroll);
    };
  }, [previousPositionY, path.pathname]);
};
