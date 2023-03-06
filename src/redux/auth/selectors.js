const selectUserName = state => state.auth.user.name;
const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectIsRefreshing = state => state.auth.isRefreshing;

export const authSelectors = {
  selectUserName,
  selectIsLoggedIn,
  selectIsRefreshing,
};
