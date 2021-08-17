export const handleLogout = (state, action) => {
  //only change the form elements and message
  return {
    ...state,
    loading: false,
    message: "Some Error Occured Please Try Again",
  };
};
