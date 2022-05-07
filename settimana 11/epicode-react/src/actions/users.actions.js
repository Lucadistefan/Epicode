export const ADD_USERS = "ADD_USERS";
export const DELETE_USER = "DELETE_USER";
export const RESET_USERS = "RESET_USERS";

export const addUsers = (users) => ({
  type: ADD_USERS,
  users,
});

export const deleteUser = (userId) => ({
  type: DELETE_USER,
  userId,
});

export const resetUsers = (users) => ({
  type: RESET_USERS,
  users
}); 
