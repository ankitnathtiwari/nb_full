export const reducer = (state, action) => {
  switch (action.type) {
    case "value":
      return handleFollowing(state, action);

    default:
      throw new Error();
  }
};
