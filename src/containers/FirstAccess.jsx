import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, TextField, Tooltip, Typography } from "@material-ui/core";
import { Content, Header, Page } from "mastro-elfo-mui";
import { useSnackbar } from "notistack";

import { Responsive } from "../components";
import { init, createUser } from "../features/hasAdmin";

import SaveIcon from "@material-ui/icons/Save";

export default function Component({ children }) {
  const [valid, setValid] = useState(false);
  // Form values
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");
  // Check if there are admins
  const hasAdmin = useSelector((state) => state.hasAdmin.has);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    // Check if any field is empty
    if (
      ![name, surname, username, password, rPassword].every((x) => x.trim())
    ) {
      return setValid(false);
    }
    if (password !== rPassword) {
      return setValid(false);
    }
    setValid(true);
  }, [name, surname, username, password, rPassword]);

  useEffect(() => {
    dispatch(init());
    // eslint-disable-next-line
  }, []);

  const handleSave = () => {
    dispatch(createUser({ name, surname, username, password, admin: true }))
      .then(() => {
        enqueueSnackbar("User created", { variant: "success" });
      })
      .catch((err) => {
        console.error(err);
        enqueueSnackbar("Error creating user", { variant: "error" });
      });
  };

  if (!hasAdmin) {
    return (
      <Page
        header={
          <Header
            withContainer
            rightAction={
              <Tooltip
                title={<Typography variant="body2">Ok, click save</Typography>}
                arrow
                placement="left"
                open={valid}
              >
                <IconButton disabled={!valid} onClick={handleSave}>
                  <SaveIcon />
                </IconButton>
              </Tooltip>
            }
          >
            Create an Admin
          </Header>
        }
        content={
          <Content>
            <Responsive
              ContainerProps={{ justify: "center" }}
              xs={12}
              md={10}
              xl={8}
            >
              <Typography variant="h6">
                First we need to create an Admin user
              </Typography>
              <Typography>
                Admins have full control over the application.
              </Typography>
              <Typography>They can:</Typography>
              <ul>
                <li>Create new users</li>
                <li>Create monthly reports</li>
                <li>Manage app settings</li>
                <li>View app log</li>
              </ul>

              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={({ target: { value } }) => setName(value)}
                error={!name.trim()}
                helperText={!name.trim() && "Name can't be empty"}
              />
              <TextField
                fullWidth
                label="Surname"
                value={surname}
                onChange={({ target: { value } }) => setSurname(value)}
                error={!surname.trim()}
                helperText={!surname.trim() && "Surname can't be empty"}
              />
              <TextField
                fullWidth
                label="Username"
                value={username}
                onChange={({ target: { value } }) => setUsername(value)}
                error={!username.trim()}
                helperText={!username.trim() && "Username can't be empty"}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
                error={!password.trim()}
                helperText={!password.trim() && "Password can't be empty"}
              />
              <TextField
                fullWidth
                label="Repeat Password"
                type="password"
                value={rPassword}
                onChange={({ target: { value } }) => setRPassword(value)}
                error={password !== rPassword}
                helperText={
                  password !== rPassword && "Password and Repeat don't match"
                }
              />
            </Responsive>
          </Content>
        }
      />
    );
  }

  return children;
}
