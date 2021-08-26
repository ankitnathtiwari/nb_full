export const handleNavbar = (state, action) => {
  console.log("handle navbar called");
  return {
    ...state,
    navbar: action.payload,
  };
};
