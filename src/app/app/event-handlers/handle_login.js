export const handleLogin = (state, action) => {
  //validate
  console.log("handle Login global called");
  return {
    ...state,
    loading: false,
    user: action.payload,
    message: "",
  };
};
