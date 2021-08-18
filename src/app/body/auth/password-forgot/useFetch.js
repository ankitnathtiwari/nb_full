import axios from "axios";
import { useEffect } from "react";

const postData = (state, dispatch, globalDispatch) => {
  axios({
    method: "post",
    url: state.url,
    data: state.payloadData,
    withCredentials: true,
  })
    .then((res) => {
      res.data.auth
        ? dispatch({ type: "EMAIL_SUCCESSFUL", payload: res.data })
        : dispatch({ type: "INVALID_CRED", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "ERR" });
    });
};

export const useFetch = (state, dispatch, globalDispatch) => {
  useEffect(() => {
    if (state.loading) {
      postData(state, dispatch, globalDispatch);
    }
    return () => {};
  }, [state.loading]);
};
