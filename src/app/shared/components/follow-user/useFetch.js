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
      console.log("");
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
    if (state.loading) {
      postData(state, dispatch, globalDispatch);
    }
    return () => {};
  }, [state.loading]);
};
