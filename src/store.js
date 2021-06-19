import { configureStore } from "@reduxjs/toolkit";

import hasAdmin from "./features/hasAdmin";
import login from "./features/login";

export default configureStore({ reducer: { hasAdmin, login } });
