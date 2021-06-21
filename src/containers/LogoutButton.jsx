import { useDispatch, useSelector } from "react-redux";

import { IconButton } from "@material-ui/core";

import LogoutIcon from "@material-ui/icons/ExitToApp";

import { logout } from "../features/login";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.login);

  const handleLogout = () => {
    dispatch(logout())
      .then(() => {
        console.log("Logout successful");
      })
      .catch((err) => {
        console.error("Logout Error", err);
      });
  };
  return (
    <IconButton onClick={handleLogout} disabled={loading}>
      <LogoutIcon />
    </IconButton>
  );
}
