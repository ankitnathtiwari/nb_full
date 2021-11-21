export const handleUserChange = (state, action) => {
  return {
    ...state,
    user: action.payload,
    initLoading: true,
  };
};
