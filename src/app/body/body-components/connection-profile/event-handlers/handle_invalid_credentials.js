export const handleInvalidCredentials = (state, action) => {
  return {
    ...state,
    message: "Invalid Credentials",
    loading: false,
  };
};
