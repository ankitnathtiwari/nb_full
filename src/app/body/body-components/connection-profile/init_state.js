import { baseUrl } from "../../../base-url";

export const initState = {
  url: `${baseUrl}/json_api/user/profile`,
  user: {},
  method: "GET",
  loading: false,
  err: false,
  message: "",
  editProfile: false,
  payloadData: {},
};
