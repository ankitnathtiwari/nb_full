export const handlePasswordChange = (state, action) => {
  return {
    ...state,
    loading: false,
    message: "Password Changed Successfully",
  };
};
