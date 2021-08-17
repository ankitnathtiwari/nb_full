export const handleLogin = (state, action) => {
  //validate
  return {
    ...state,
    loading: false,
    user: action.payload.user,
    message: "",
  };
};
