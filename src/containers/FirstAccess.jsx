import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, List, ListItem, Typography } from "@material-ui/core";
import { Content, Header, Page } from "mastro-elfo-mui";
import { useSnackbar } from "notistack";

import { Responsive, ValidateField } from "../components";
import { init, createUser } from "../features/hasAdmin";

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
      [name, surname, username, password, rPassword].some((x) =>
        validateEmpty(x)
      )
    ) {
      return setValid(false);
    }
    if (validateRPassword(password, rPassword)) return setValid(false);
    // Otherwise
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
        header={<Header withContainer>Create an Admin</Header>}
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

              <List>
                <ListItem>
                  <ValidateField
                    fullWidth
                    label="Name"
                    value={name}
                    onChange={({ target: { value } }) => setName(value)}
                    validateFn={validateEmpty}
                    validateArgs={[name]}
                  />
                </ListItem>
                <ListItem>
                  <ValidateField
                    fullWidth
                    label="Surname"
                    value={surname}
                    onChange={({ target: { value } }) => setSurname(value)}
                    validateFn={validateEmpty}
                    validateArgs={[surname]}
                  />
                </ListItem>
                <ListItem>
                  <ValidateField
                    fullWidth
                    label="Username"
                    value={username}
                    onChange={({ target: { value } }) => setUsername(value)}
                    validateFn={validateEmpty}
                    validateArgs={[username]}
                  />
                </ListItem>
                <ListItem>
                  <ValidateField
                    fullWidth
                    label="Password"
                    type="password"
                    value={password}
                    onChange={({ target: { value } }) => setPassword(value)}
                    validateFn={validateEmpty}
                    validateArgs={[password]}
                  />
                </ListItem>
                <ListItem>
                  <ValidateField
                    fullWidth
                    label="Repeat Password"
                    type="password"
                    value={rPassword}
                    onChange={({ target: { value } }) => setRPassword(value)}
                    validateFn={validateRPassword}
                    validateArgs={[password, rPassword]}
                  />
                </ListItem>
                <ListItem>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!valid}
                    onClick={handleSave}
                  >
                    Save
                  </Button>
                </ListItem>
              </List>
            </Responsive>
          </Content>
        }
      />
    );
  }

  return children;
}

function validateEmpty(value) {
  if (!value.trim())
    return {
      error: true,
      helperText: "This field can't be empty",
    };
}

function validateRPassword(password, rPassword) {
  if (!rPassword.trim())
    return {
      error: true,
      helperText: "This field can't be empty",
    };
  if (rPassword !== password) {
    return {
      error: true,
      helperText: "The two passwords don't match",
    };
  }
}
