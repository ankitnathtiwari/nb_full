import { baseUrl } from "../../../../base-url";

export const handleLike = (state, action) => {
  return {
    ...state,
    loading: true,
    follow_clicked: true,
    url: `${baseUrl}/json_api/post/follow`,
    payloadData: {
      profile_id: state.profile.id,
    },
  };
};
