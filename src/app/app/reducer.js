import {
  handleLogin,
  handleLogout,
  fetchCompleted,
  topicChange,
  handleNavbar,
  handleTopSidebar,
} from "./event-handlers";

export const reducer = (state, action) => {
  console.log("app reducer called", action.type);
  switch (action.type) {
    case "LOGIN":
      return handleLogin(state, action);
    case "FETCH_COMPLETED":
      return fetchCompleted(state, action);
    case "TOPIC_CHANGE":
      return topicChange(state, action);
    case "LOGOUT":
      return handleLogout(state, action);
    case "HIDE_NAV_BAR":
      return handleNavbar(state, action);
    case "TOP_SIDE_BAR":
      return handleTopSidebar(state, action);
    case "ERR":
      return errHandler(state, action);
    default:
      throw new Error();
  }
};
