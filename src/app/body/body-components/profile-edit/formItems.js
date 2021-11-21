import cancelButton from "./icons/delete.png";

export const formItems = [
  {
    type: "ICON_BUTTON",
    id: "cancel",
    value: "",
    icon: cancelButton,
    className: "edit-cancel",
  },
  {
    type: "INPUT",
    id: "input1",
    value: "",
    placeholder: "Name",
    className: "edit-name",
    group: "1",
  },
  {
    type: "TEXTAREA",
    id: "textarea",
    value: "",
    placeholder: "Bio",
    className: "edit-bio",
    group: "1",
  },

  { type: "UPLOAD_IMAGE", id: "addimage", value: "", name: "Profile Image" },

  {
    type: "BUTTON",
    id: "submitButton",
    value: "Submit",
    placeholder: "button",
  },
];
