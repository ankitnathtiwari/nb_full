export const forwardLink = (props) => {
  //if user is current user the return my profile
  // else return pathname to
  return {
    pathname: `/profile/${props.post.author.id}`,
    state: { profile: props.post.author },
  };
};
