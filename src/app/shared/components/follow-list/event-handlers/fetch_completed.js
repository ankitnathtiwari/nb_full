export const fetchCompleted = (state, action) => {
  //set loading :false, initData:fetch data, message:successfully fetched
  return {
    ...state,
    loading: false,
    initLoading: false,
    followList: action.payload.followers,
  };
};
