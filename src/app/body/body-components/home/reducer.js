import {
  clickHandler,
  handleInvalidCredentials,
  handlePostReceived,
  handleLike,
  handleFollowing,
} from "./event-handlers";

import { formChangeHandler } from "../../../shared/other-func/form-handlers/index";

export const reducer = (state, action) => {
  console.log("home redcuer called");
  switch (action.type) {
    case "POST_RECEIVED":
      return handlePostReceived(state, action);
    case "LIKED":
      return handleLike(state, action);
    case "FOLLOWING":
      return handleFollowing(state, action);
    case "FORM_CHANGE":
      return formChangeHandler(state, action);
    case "BUTTON_CLICKED":
      return clickHandler(state, action);
    case "INVALID_CRED":
      return handleInvalidCredentials(state, action);
    case "ERR":
      return errHandler(state, action);
    default:
      throw new Error();
  }
};
