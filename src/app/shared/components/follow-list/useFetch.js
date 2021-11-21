import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";

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

const getData = (state, dispatch, params) => {
  //dispatch here to set loading true

  axios({
    method: "get",
    url: `${state.url}?id=${params.id}`,
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
  const params = useParams();
  useEffect(() => {
    getData(state, dispatch, params);
    return () => {};
  }, [params.id]);
};
