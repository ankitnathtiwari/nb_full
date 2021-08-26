export const handleLike = (state, action) => {
  console.log(action.payload, "handlelike home");
  return {
    ...state,
    postList: state.postList.map((post) => {
      if (post._id === action.payload.post_id) {
        post.like.like_status = true;
        return post;
      }
      return post;
    }),
  };
};
