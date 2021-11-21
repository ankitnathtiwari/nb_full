import { baseUrl } from "../../../base-url";

export const initState = (initProfileData) => {
  return {
    url: `${baseUrl}/json_api/profile`,
    profile: initProfileData.basicProfile || {},
    method: "POST",
    follow_clicked: false,
    loading: false,
    initLoading: true,
    err: false,
    message: "",
    payloadData: initProfileData.profile_id,
  };
};
