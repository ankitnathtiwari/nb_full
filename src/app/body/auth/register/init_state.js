import { baseUrl } from "../../../base-url";

const formItems = [
  {
    type: "INPUT",
    id: "input1",
    value: "",
    placeholder: "email or Phone Number",
  },
  { type: "INPUT", id: "input2", value: "", placeholder: "password" },
  { type: "INPUT", id: "input3", value: "", placeholder: "name" },
  { type: "BUTTON", id: "button1", value: "Register" },
];

export const initState = {
  url: `${baseUrl}/json_api/auth/register`,
  method: "POST",
  loading: false,
  err: false,
  message: "",
  edited: false,
  formItems: formItems,
  payloadData: {},
};
