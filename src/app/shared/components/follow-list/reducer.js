import {
  handleLike,
  handleInvalidCredentials,
  errHandler,
  fetchCompleted,
  handleUserChange,
} from "./event-handlers";

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_COMPLETED":
      return fetchCompleted(state, action);
    case "FOLLOW_CLICKED":
      return handleLike(state, action);
    case "INVALID_CRED":
      return handleInvalidCredentials(state, action);

    case "USER_CHANGED":
      return handleUserChange(state, action);
    case "ERR":
      return errHandler(state, action);
    default:
      throw new Error();
  }
};
