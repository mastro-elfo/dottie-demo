import { configureStore } from "@reduxjs/toolkit";

import hasAdmin from "./features/hasAdmin";
import login from "./features/login";
import timeline from "./features/timeline";

export default configureStore({ reducer: { hasAdmin, login, timeline } });
