export const handleEditClicked = (state, action) => {
  console.log(action, "handleedit click");
  return {
    ...state,
    editProfile: action.payload,
  };
};
