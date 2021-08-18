import { baseUrl } from "../../../base-url";
const formItems = [
  { type: "INPUT", id: "input1", value: "", placeholder: "registered email" },
  { type: "BUTTON", id: "button1", value: "Submit" },
];

export const initState = {
  url: `${baseUrl}/json_api/auth/password_forgot`,
  method: "POST",
  loading: false,
  err: false,
  message: "",
  edited: false,
  formItems: formItems,
  payloadData: {},
};
