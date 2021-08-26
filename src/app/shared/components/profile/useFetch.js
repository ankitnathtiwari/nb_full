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
      if (res.data.status) {
        if (state.follow_clicked) {
          return dispatch({ type: "FOLLOW_SUCCESSFULL", payload: res.data });
        } else {
          return dispatch({ type: "FETCH_COMPLETED", payload: res.data });
        }
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
      postData(state, dispatch, globalDispatch);
    }
    return () => {};
  }, [state.loading]);
};
