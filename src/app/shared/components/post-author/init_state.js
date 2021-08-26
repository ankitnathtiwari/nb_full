import { baseUrl } from "../../../base-url";

export const initState = (post) => {
  return {
    url: `${baseUrl}/json_api/post/follow`,
    post_id: post._id,
    method: "POST",
    loading: false,
    err: false,
    message: "",
    payloadData: {},
  };
};
