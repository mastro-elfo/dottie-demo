import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import { Content, Header, Page } from "mastro-elfo-mui";
import { Responsive } from "../components";

import { init, login } from "../features/login";
import { create } from "../controllers/login";

export default function Component({ children }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, logged, error } = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(init());
    // eslint-disable-next-line
  }, []);

  const handleLogin = () => {
    dispatch(login({ username, password }))
      .then(({ payload }) => create(payload))
      .catch((err) => {
        console.error(err);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
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
              {!!error && (
                <Typography color="error" gutterBottom>
                  {error}
                </Typography>
              )}
              <TextField
                fullWidth
                label="Username"
                value={username}
                onChange={({ target: { value } }) => setUsername(value)}
                onKeyPress={handleKeyPress}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
                onKeyPress={handleKeyPress}
              />
              <Box py={1}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLogin}
                  disabled={!username || !password || loading}
                >
                  Login
                </Button>
              </Box>
            </Responsive>
          </Content>
        }
      />
    );
  }
  return children;
}
