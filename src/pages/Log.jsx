import { BackIconButton, Content, Header, Page } from "mastro-elfo-mui";
import DrawerIcon from "@material-ui/icons/ViewList";

function Component() {
  return (
    <Page
      header={<Header LeftAction={<BackIconButton />}>Log</Header>}
      content={<Content>Log content</Content>}
    />
  );
}

export const route = {
  path: "/log",
  exact: true,
  component: Component,
};

export const drawer = {
  key: "log",
  primary: "Log",
  secondary: "",
  icon: <DrawerIcon />,
  title: "Open Log",
};
