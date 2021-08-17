const formItems = [
  { type: "INPUT", id: "input1", value: "", placeholder: "registered email" },
  { type: "BUTTON", id: "button1", value: "", placeholder: "button" },
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
