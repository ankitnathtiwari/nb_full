import {
  handleLike,
  handleInvalidCredentials,
  errHandler,
  fetchCompleted,
} from "./event-handlers";

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_COMPLETED":
      return fetchCompleted(state, action);
    case "LIKE_CLICKED":
      return handleLike(state, action);
    case "INVALID_CRED":
      return handleInvalidCredentials(state, action);
    case "ERR":
      return errHandler(state, action);
    default:
      throw new Error();
  }
};
