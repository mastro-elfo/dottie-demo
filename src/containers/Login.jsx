import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField } from "@material-ui/core";
import { Content, Header, Page } from "mastro-elfo-mui";
import { Responsive } from "../components";

import { login } from "../features/users";

export default function Component({ children }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.users.logged);

  const handleLogin = () => {
    dispatch(login({ username, password }));
  };

  if (!logged) {
    return (
      <Page
        header={<Header withContainer>Login</Header>}
        content={
          <Content>
            <Responsive
              ContainerProps={{ justify: "center" }}
              xs={12}
              md={10}
              xl={8}
            >
              <TextField
                fullWidth
                label="Username"
                value={username}
                onChange={({ target: { value } }) => setUsername(value)}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogin}
                disabled={!username || !password}
              >
                Login
              </Button>
            </Responsive>
          </Content>
        }
      />
    );
  }
  return children;
}
