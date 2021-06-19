import { useState } from "react";

import {
  Box,
  ClickAwayListener,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core";

import FaceIcon from "@material-ui/icons/Face";

export default function TimelineAvatar({ user }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const admin = user.admin.is;

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Tooltip
        onClose={handleClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        arrow
        title={
          <Box p={1}>
            <Typography variant="h5">
              {user.name} {user.surname}
            </Typography>
            <Typography variant="subtitle1">
              {admin ? "Admin" : "User"}
            </Typography>
          </Box>
        }
      >
        <IconButton onClick={handleOpen}>
          <FaceIcon />
        </IconButton>
      </Tooltip>
    </ClickAwayListener>
  );
}
