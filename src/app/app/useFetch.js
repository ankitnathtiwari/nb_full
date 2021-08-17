import { useEffect } from "react";
import axios from "axios";

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
    if (state.initLoading || state.loading) {
      getData(state, dispatch);
    }
    return () => {};
  }, [state.initLoading, state.loading]);
};
