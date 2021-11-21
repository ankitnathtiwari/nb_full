export const locationChange = (state, action) => {
  return {
    ...state,
    location: {
      current: action.payload.current,
      selected: action.payload.selected,
    },
    changeLocation: false,
  };
};
