export const formChangeHandler = (state, action) => {
  return {
    ...state,
    message: "",
    edited: true,
    formItems: state.formItems.map((item) => {
      if (item.id === action.payload.id) {
        item.value = action.payload.value;
        return item;
      }
      return item;
    }),
  };
};
