export const fetchCompleted = (state, action) => {
  //set loading :false, initData:fetch data, message:successfully fetched
  return {
    ...state,
    loading: false,
    initLoading: false,
    follow_user: { ...state.follow_user, follow_status: true },
  };
};
