import { configureStore } from "@reduxjs/toolkit";

import hasAdmin from "./features/hasAdmin";

export default configureStore({ reducer: { hasAdmin } });
