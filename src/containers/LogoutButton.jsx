import { useDispatch, useSelector } from "react-redux";

import { IconButton } from "@material-ui/core";
import { useSnackbar } from "notistack";

import LogoutIcon from "@material-ui/icons/ExitToApp";

import { logout } from "../features/login";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.login);
  const { enqueueSnackbar } = useSnackbar();

  const handleLogout = () => {
    dispatch(logout())
      .then(() => {
        console.log("Logout successful");
        enqueueSnackbar("Logout successful", { variant: "success" });
      })
      .catch((err) => {
        console.error("Logout Error", err);
        enqueueSnackbar("Logout Error", { variant: "error" });
      });
  };
  return (
    <IconButton onClick={handleLogout} disabled={loading}>
      <LogoutIcon />
    </IconButton>
  );
}
