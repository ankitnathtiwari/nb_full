export const fetchCompleted = (state, action) => {
  //set loading :false, initData:fetch data, message:successfully fetched
  console.log(action.payload, "fetch completed functino");
  return {
    ...state,
    loading: false,
    initLoading: false,
    profile: action.payload.profile,
  };
};
