export const clickHandler = (state, action) => {
  return {
    ...state,
    loading: true,
    payloadData: {
      email: state.formItems[0].value,
      password: state.formItems[1].value,
    },
  };
};
