export const handleLike = (state, action) => {
  return {
    ...state,
    loading: true,
    payloadData: {
      post_id: state.post_id,
    },
  };
};
