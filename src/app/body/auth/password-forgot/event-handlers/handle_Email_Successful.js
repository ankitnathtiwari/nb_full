export const handleEmailSuccessful = (state, action) => {
  return {
    ...state,
    loading: false,
    message: "Please Click On The Link Sent To Your Registered Email Address",
  };
};
