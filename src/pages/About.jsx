import { List, ListItem, ListItemText } from "@material-ui/core";
import { BackIconButton, Content, Header, Page } from "mastro-elfo-mui";
import { Responsive } from "../components";

import DrawerIcon from "@material-ui/icons/Info";

import { version } from "../version.json";

function Component() {
  return (
    <Page
      header={<Header leftAction={<BackIconButton />}>About</Header>}
      content={
        <Content>
          <Responsive
            ContainerProps={{ justify: "center" }}
            xs={12}
            md={10}
            xl={8}
          >
            <List>
              <ListItem>
                <ListItemText primary={version} secondary="Version" />
              </ListItem>
              <ListItem>
                <ListItemText primary="MIT" secondary="License" />
              </ListItem>
            </List>
          </Responsive>
        </Content>
      }
    />
  );
}

export const route = {
  path: "/about",
  exact: true,
  component: Component,
};

export const drawer = {
  key: "about",
  primary: "About",
  secondary: "",
  icon: <DrawerIcon />,
  title: "Open About",
  href: "/about",
};
