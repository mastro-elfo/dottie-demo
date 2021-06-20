import { useState } from "react";

import { IconButton, TextField } from "@material-ui/core";
import { ConfirmDialog } from "mastro-elfo-mui";

import AddIcon from "@material-ui/icons/Add";

export default function DottieAddIconButton() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const now = new Date();

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
        onConfirm={() => {}}
        onCancel={() => setOpen(false)}
        content={[
          now.toLocaleDateString(undefined, { dateStyle: "long" }),
          now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
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
