export const handleSubmit = (state, action) => {
  //validate
  return {
    ...state,
    loading: true,
    sendData: formData(state),
  };
};
