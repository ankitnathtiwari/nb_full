import { baseUrl } from "../../../base-url";

const formItems = [
  {
    type: "INPUT",
    id: "input1",
    value: "",
    placeholder: "New Password",
  },
  {
    type: "INPUT",
    id: "input2",
    value: "",
    placeholder: "Confirm New Password",
  },
  { type: "BUTTON", id: "button1", value: "Change Password" },
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
