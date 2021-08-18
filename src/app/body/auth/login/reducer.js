import { fetchCompleted } from "./event-handlers";
import { clickHandler } from "./event-handlers/index";
import { formChangeHandler } from "../../../shared/other-func/form-handlers/index";

export const reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_SUBMIT":
      return handleSubmit(state, action);
    case "FETCH_COMPLETED":
      return fetchCompleted(state, action);
    case "FORM_CHANGE":
      return formChangeHandler(state, action);
    case "BUTTON_CLICKED":
      return clickHandler(state, action);
    case "ERR":
      return errHandler(state, action);
    default:
      throw new Error();
  }
};
