import { baseUrl } from "../../../base-url";

export const initState = {
  url: `${baseUrl}/json_api/user/followers`,
  user: {},
  method: "get",
  loading: false,
  initLoading: false,
  err: false,
  message: "",
  followList: [],
  payloadData: {},
};
