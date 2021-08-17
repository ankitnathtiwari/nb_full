const formItems = [
  {
    type: "INPUT",
    id: "input1",
    value: "",
    placeholder: "email or Phone Number",
  },
  { type: "INPUT", id: "input2", value: "", placeholder: "password" },
  { type: "INPUT", id: "input3", value: "", placeholder: "name" },
  { type: "BUTTON", id: "5", value: "", placeholder: "button" },
];

export const initState = {
  method: "POST",
  loading: false,
  err: false,
  message: "",
  edited: false,
  formItems: formItems,
  sendData: {},
};
