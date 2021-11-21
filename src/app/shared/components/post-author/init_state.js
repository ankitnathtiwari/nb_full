import { baseUrl } from "../../../base-url";
import { forwardLink } from "./forward_link";

export const initState = (props) => {
  return {
    url: `${baseUrl}/json_api/post/follow`,
    post: props.post || {},
    routeAddress: forwardLink(props),
    globalState: props.globalState || {},
    method: "POST",
    loading: false,
    err: false,
    message: "",
    payloadData: {},
  };
};
