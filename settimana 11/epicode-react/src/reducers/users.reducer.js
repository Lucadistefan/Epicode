import { ADD_USERS, DELETE_USER, RESET_USERS } from "../actions/users.actions";

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USERS:
      return [...state, ...action.users];
    case DELETE_USER:
      return state.filter((user) => user.id != action.user);
      case RESET_USERS:
        return [...];
    default:
      return state;
  }
};
