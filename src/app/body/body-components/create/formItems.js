import location_icon from "./icons/location_white.png";

export const formItems = [
  {
    type: "INPUT",
    id: "input1",
    value: "",
    placeholder: "Heading",
    className: "create-heading",
    group: "1",
  },
  {
    type: "TEXTAREA",
    id: "textarea",
    value: "",
    placeholder: "Content",
    className: "create-textarea",
    group: "1",
  },

  { type: "SELECT", id: "topics", value: "", placeholder: "Content" },
  { type: "UPLOAD_IMAGE", id: "addimage", value: "", name: "Select Image" },

  {
    type: "ICON_BUTTON",
    id: "changeLocation",
    value: "Add Location",
    icon: location_icon,
    className: "location_button",
  },

  {
    type: "BUTTON",
    id: "submitButton",
    value: "Submit",
    placeholder: "button",
  },
];
