const formItems = [
  { type: "INPUT", id: "input1", value: "", placeholder: "username" },
  { type: "INPUT", id: "input2", value: "", placeholder: "password" },
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
