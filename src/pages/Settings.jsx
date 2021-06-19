import { BackIconButton, Content, Header, Page } from "mastro-elfo-mui";
import DrawerIcon from "@material-ui/icons/Settings";

function Component() {
  return (
    <Page
      header={<Header LeftAction={<BackIconButton />}>Settings</Header>}
      content={<Content>Settings content</Content>}
    />
  );
}

export const route = {
  path: "/settings",
  exact: true,
  component: Component,
};

export const drawer = {
  key: "settings",
  primary: "Settings",
  secondary: "",
  icon: <DrawerIcon />,
  title: "Open Settings",
};
