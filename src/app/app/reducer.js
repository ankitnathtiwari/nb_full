import { handleLogin } from "./event-handlers";
import { handleLogout } from "./event-handlers";
import { fetchCompleted } from "./event-handlers";

export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return handleLogin(state, action);
    case "FETCH_COMPLETED":
      return fetchCompleted(state, action);
    case "LOGOUT":
      return handleLogout(state, action);
    case "ERR":
      return errHandler(state, action);
    default:
      throw new Error();
  }
};
