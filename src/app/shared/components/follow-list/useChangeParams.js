import React, { useState, useEffect, useContext } from "react";
import { globalStateContext } from "../../../app";
import { Link, useParams, useLocation } from "react-router-dom";

export const useParamChange = (dispatch, id) => {
  const params = useParams();
  const { globalState, globalDispatch } = useContext(globalStateContext);
  useEffect(() => {
    if (globalState.user.user.id === params.id) {
      dispatch({ type: "USER_CHANGED", payload: globalState.user.user });
    } else {
      dispatch({ type: "USER_CHANGED", payload: { id: params.id } });
    }
  }, [params.id]);
};
