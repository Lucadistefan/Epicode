import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers";

import users from "./features/users/user.slice";

export default configureStore({
  reducer: {
    users,
  },
});
