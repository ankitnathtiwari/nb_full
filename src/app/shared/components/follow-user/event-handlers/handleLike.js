export const handleLike = (state, action) => {
  return {
    ...state,
    loading: true,
    follow_clicked: true,
  };
};
