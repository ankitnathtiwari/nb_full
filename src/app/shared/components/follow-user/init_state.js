import { baseUrl } from "../../../base-url";

export const initState = (user) => {
  return {
    url: `${baseUrl}/json_api/post/follow`,
    follow_user: user,
    method: "POST",
    loading: false,
    follow_clicked: false,
    initLoading: false,
    err: false,
    message: "",
    payloadData: {},
  };
};
