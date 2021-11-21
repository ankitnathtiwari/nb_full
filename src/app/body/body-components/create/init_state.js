import { baseUrl } from "../../../base-url";
import { formItems } from "./formItems";

export const initState = {
  url: `${baseUrl}/json_api/post/create`,
  method: "POST",
  loading: false,
  err: false,
  message: "",
  edited: false,
  formItems: formItems,
  payloadData: {},
  changeLocation: false,

  location: {
    current: { id: "", place_name: "", lat: "", long: "" },
    selected: { id: "", place_name: "", lat: "", long: "" },
  },
};
