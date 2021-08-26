export const handleTopSidebar = (state, action) => {
  return {
    ...state,
    topNav: { showSideBar: action.payload },
  };
};
