const formItems = [
  { type: "INPUT", id: "input1", value: "", placeholder: "username" },
  { type: "INPUT", id: "input2", value: "", placeholder: "password" },
  {
    type: "BUTTON",
    id: "login_button",
    value: "Login",
    placeholder: "button",
  },
];

export const initState = {
  method: "POST",
  loading: false,
  err: false,
  message: "",
  edited: false,
  formItems: formItems,
  payloadData: {},
};
