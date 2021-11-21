import axios from "axios";
import { useEffect } from "react";

const postData = (state, dispatch) => {
  axios({
    method: "post",
    url: state.url,
    data: state.payloadData,
    withCredentials: true,
  })
    .then((res) => {
      dispatch({ type: "INVALID_CRED", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "ERR" });
    });
};

const getData = (state, dispatch) => {
  axios({
    method: "get",
    url: state.url,
    withCredentials: true,
  })
    .then((res) => {
      dispatch({ type: "FETCH_COMPLETED", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "ERR" });
    });
};

export const useFetch = (state, dispatch) => {
  useEffect(() => {
    if (state.loading) {
      postData(state, dispatch);
    }
    return () => {};
  }, [state.loading]);
};
