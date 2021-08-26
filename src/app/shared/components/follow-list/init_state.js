import { baseUrl } from "../../../base-url";

export const initState = (props) => {
  return {
    url: `${baseUrl}/json_api/profile${props.path}`,
    profile_id: props.userId,
    method: "POST",
    loading: false,
    initLoading: true,
    err: false,
    message: "",
    followList: [],
    payloadData: {},
  };
};
