import { baseUrl } from "../../../base-url";

export const initState = {
  url: `${baseUrl}/json_api/post/home`,
  method: "GET",
  loading: false,
  initLoading: true,
  err: false,
  message: "",
  edited: false,
  postList: [],
  payloadData: {},
};
