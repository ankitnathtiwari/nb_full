import { baseUrl } from "../../../base-url";
import { formItems } from "./formItems";

export const initState = {
  url: `${baseUrl}/json_api/profile/edit`,
  method: "POST",
  loading: false,
  err: false,
  message: "",
  edited: false,
  formItems: formItems,
  payloadData: {},
};
