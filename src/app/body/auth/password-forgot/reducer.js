import {
  clickHandler,
  handleInvalidCredentials,
  handleEmailSuccessful,
  errHandler,
} from "./event-handlers";

import { formChangeHandler } from "../../../shared/other-func/form-handlers/index";

//button click
//capture the formitmes and update state payload Data, loading true
//usefetch will be called with state and dispatch
//if updated success full dispatch "registeration complete"
//if err dispatch err
//if Invalid_cred dispatch invlaid cred

export const reducer = (state, action) => {
  switch (action.type) {
    case "FORM_CHANGE":
      return formChangeHandler(state, action);
    case "BUTTON_CLICKED":
      return clickHandler(state, action);
    case "EMAIL_SUCCESSFUL":
      return handleEmailSuccessful(state, action);
    case "INVALID_CRED":
      return handleInvalidCredentials(state, action);
    case "ERR":
      return errHandler(state, action);
    default:
      throw new Error();
  }
};
