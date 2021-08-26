import { baseUrl } from "../base-url";

export const initState = {
  url: `${baseUrl}/json_api/auth`,
  user: { auth: false, user: "" },
  loading: false,
  initLoading: true,
  err: false,
  message: "",
  navbar: { top: "0px" },
  topNav: { showSideBar: false },
  topSlideBar: { topic_value: "", showTopic: true },
  payloadData: {},
};
