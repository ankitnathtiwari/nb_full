import axios from "axios";
import { useEffect } from "react";

const postData = (state, dispatch, globalDispatch) => {
  // We should perform get request here

  axios({
    method: "post",
    url: state.url,
    data: state.payloadData,
    withCredentials: true,
  })
    .then((res) => {
      console.log("");
      if (res.data.status) {
        dispatch({ type: "FETCH_COMPLETED", payload: res.data });
        return globalDispatch({
          type: "FOLLOWING",
          payload: { post_id: state.post_id },
        });
      } else {
        dispatch({ type: "ERR", payload: res.data });
      }
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
      if (res.data.status) {
        return dispatch({ type: "FETCH_COMPLETED", payload: res.data });
      } else {
        dispatch({ type: "ERR", payload: res.data });
      }
    })
    .catch((err) => {
      dispatch({ type: "ERR" });
    });
};

export const useFetch = (state, dispatch, globalDispatch) => {
  useEffect(() => {
    if (state.loading || state.initLoading) {
      console.log("init loading called use fetch");
      if (state.initLoading) {
        getData(state, dispatch);
      } else {
        postData(state, dispatch, globalDispatch);
      }
    }
    return () => {};
  }, [state.loading]);
};
