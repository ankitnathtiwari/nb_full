export const clickHandler = (state, action) => {
  switch (action.payload.id) {
    case "changeLocation":
      return {
        ...state,
        changeLocation: !state.changeLocation,
      };
    case "submitButton":
      return {
        ...state,
        loading: true,
      };
    default:
      break;
  }
};
