import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import { ConfirmDialog } from "mastro-elfo-mui";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { useSnackbar } from "notistack";

import { create, readAll } from "../features/timeline";

import AddIcon from "@material-ui/icons/Add";
import UpdateIcon from "@material-ui/icons/Update";

export default function DottieAddIconButton() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [datetime, setDatetime] = useState(new Date());
  const dispatch = useDispatch();
  const author = useSelector((state) => state.login.logged);
  const { loading, error } = useSelector((state) => state.timeline);
  const { enqueueSnackbar } = useSnackbar();

  const handleSave = () => {
    dispatch(create({ author, data: { datetime, title, note } }))
      .then(() => {
        console.info("Note created");
        enqueueSnackbar("Note created", { variant: "success" });
      })
      .then(() => dispatch(readAll()))
      .then(() => {
        setOpen(false);
      })
      .catch((err) => {
        console.error("Error creating note", err);
        enqueueSnackbar("Error creating note", { variant: "error" });
      });
  };

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <AddIcon />
      </IconButton>
      <ConfirmDialog
        open={open}
        onClose={() => setOpen(false)}
        title="Create a new note"
        confirm="Save"
        cancel="Cancel"
        onConfirm={handleSave}
        onCancel={() => setOpen(false)}
        ConfirmButtonProps={{ disabled: loading }}
        CancelButtonProps={{ disabled: loading }}
        content={[
          !!error && <Typography color="error">{error.name}</Typography>,
          <KeyboardDateTimePicker
            label="Date and Time"
            value={datetime}
            onChange={setDatetime}
            onError={console.error}
            disableFuture
            ampm={false}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={() => setDatetime(new Date())}>
                    <UpdateIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />,
          <TextField
            fullWidth
            label="Title"
            value={title}
            onChange={({ target: { value } }) => setTitle(value)}
          />,
          <TextField
            fullWidth
            label="Note"
            value={note}
            onChange={({ target: { value } }) => setNote(value)}
            multiline
          />,
        ]}
      />
    </>
  );
}
