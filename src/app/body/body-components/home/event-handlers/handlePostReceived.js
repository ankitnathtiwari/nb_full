export const handlePostReceived = (state, action) => {
  return {
    ...state,
    postList: action.payload.postList,
    loading: false,
    initLoading: false,
  };
};
