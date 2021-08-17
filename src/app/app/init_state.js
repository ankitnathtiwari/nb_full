import { baseUrl } from "../base-url";

export const initState = {
  url: `${baseUrl}/json_api/auth`,
  user: { auth: false, user: "" },
  loading: false,
  initLoading: true,
  err: false,
  message: "",
  payloadData: {},
};
