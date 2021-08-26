export const forwardLink = (post) => {
  return {
    pathname: "/connection_profile",
    search: `?id=${post.author.id}`,
    state: { profile: post.author, myProfile: false },
  };
};
