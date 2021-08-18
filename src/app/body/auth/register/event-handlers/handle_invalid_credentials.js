export const handleInvalidCredentials = (state, action) => {
  return {
    ...state,
    message: action.payload.message,
    loading: false,
  };
};
