import {
  fetchCompleted,
  clickHandler,
  handleInvalidCredentials,
  locationChange,
} from "./event-handlers";

import { formChangeHandler } from "../../../shared/other-func/form-handlers/index";

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_COMPLETED":
      return fetchCompleted(state, action);
    case "FORM_CHANGE":
      return formChangeHandler(state, action);
    case "BUTTON_CLICKED":
      return clickHandler(state, action);
    case "INVALID_CRED":
      return handleInvalidCredentials(state, action);
    case "LOCATION_CHANGE":
      return locationChange(state, action);
    case "ERR":
      return errHandler(state, action);

    default:
      throw new Error();
  }
};
