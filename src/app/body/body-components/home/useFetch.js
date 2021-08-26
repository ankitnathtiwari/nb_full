import axios from "axios";
import React, { useEffect, useState } from "react";

const postData = (state, dispatch) => {
  axios({
    method: state.method,
    url: state.url,
    data: state.payloadData,
    withCredentials: true,
  })
    .then((res) => {
      res.data.status
        ? dispatch({ type: "POST_RECEIVED", payload: res.data })
        : dispatch({ type: "INVALID_CRED", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "ERR" });
    });
};

export const useFetch = (state, dispatch) => {
  useEffect(() => {
    if (state.loading || state.initLoading) {
      postData(state, dispatch);
    }
    return () => {
      console.log("home component unmounted");
    };
  }, [state.loading]);
};
