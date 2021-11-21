import React, { useState, useEffect } from "react";
import { useLocation, useRouteMatch } from "react-router-dom";

export const useScroll = (state, globalDispatch) => {
  const [previousPositionY, setPreviousPositionY] = useState(0);

  const path = useRouteMatch();
  const location = useLocation();

  const handleScroll = () => {
    const currentPositionY = window.pageYOffset;
    console.log(previousPositionY, currentPositionY);

    if (currentPositionY < 5) {
      globalDispatch({
        type: "HIDE_NAV_BAR",
        payload: { topNav: "0px", topSlide: "0px", bottomSlide: "0px" },
      });
      return setPreviousPositionY(currentPositionY);
    }

    if (previousPositionY > currentPositionY && currentPositionY > 5) {
      globalDispatch({
        type: "HIDE_NAV_BAR",
        payload: { topNav: "0px", topSlide: "0px", bottomSlide: "0px" },
      });
      setPreviousPositionY(currentPositionY);
    } else {
      globalDispatch({
        type: "HIDE_NAV_BAR",
        payload: { topNav: "-50px", topSlide: "-90px", bottomSlide: "-40px" },
      });
      setPreviousPositionY(currentPositionY);
    }
  };

  useEffect(() => {
    console.log("use scroll effect called");

    window.addEventListener("scroll", handleScroll);

    return () => {
      console.log("use scroll unmounted");
      //window.scrollTo(0, 0);
      //clear subscription and asynchronous task
      //some memory leak is happening here i don't know why?
      window.removeEventListener("scroll", handleScroll);
    };
  }, [
    previousPositionY,
    //location.pathname,
  ]);
};
