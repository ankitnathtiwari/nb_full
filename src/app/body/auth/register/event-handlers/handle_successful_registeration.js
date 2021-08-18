export const handleSuccessfullRegisteration = (state, action) => {
  return {
    ...state,
    loading: false,
    message: "user successfully registered",
  };
};
