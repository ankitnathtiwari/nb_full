export const handleLogout = (state, action) => {
  return {
    ...state,
    auth: false,
    loading: false,
    sideNav: false,
    user: "",
    message: "",
  };
};
