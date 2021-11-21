export const handleLike = (state, action) => {
  console.log("handle like called");
  return {
    ...state,
    loading: true,
    payloadData: {
      post_id: state.post_id,
    },
  };
};
