export const clickHandler = (state, action) => {
  console.log(
    "click handler called",
    `email: ${state.formItems[0].value}, password: ${state.formItems[1].value}`
  );
  return {
    ...state,
  };
};
