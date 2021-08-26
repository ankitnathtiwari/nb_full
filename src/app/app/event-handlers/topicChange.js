export const topicChange = (state, action) => {
  return {
    ...state,
    topSlideBar: { ...state.topSlideBar, topicValue: action.payload },
  };
};
