export const handleFollowSuccessful = (state, action) => {
  return {
    ...state,
    follow_clicked: false,
    loading: false,
    profile: { ...state.profile, follow_status: true },
  };
};
