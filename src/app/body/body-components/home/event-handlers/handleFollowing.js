export const handleFollowing = (state, action) => {
  return {
    ...state,
    postList: state.postList.map((post) => {
      if (post._id === action.payload.post_id) {
        post.author.follow_status = true;
        return post;
      }
      return post;
    }),
  };
};
