import axios from "axios";
import { useEffect } from "react";

const getData = (state, dispatch, globalDispatch) => {
  console.log(state.url, "post url");
  axios({
    method: "get",
    url: `${state.url}?id=${state.user.id}`,
    data: state.payloadData,
    withCredentials: true,
  })
    .then((res) => {
      console.log(res.data, res, "data from user fetch");
      if (res.status) {
        dispatch({ type: "FETCH_COMPLETED", payload: res.data });
        return globalDispatch({
          type: "LIKED",
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

export const useFetch = (state, dispatch, globalDispatch) => {
  useEffect(() => {
    if (state.loading) {
      getData(state, dispatch, globalDispatch);
    }
    return () => {};
  }, [state.loading]);
};
