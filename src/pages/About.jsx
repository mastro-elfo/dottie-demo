import { BackIconButton, Content, Header, Page } from "mastro-elfo-mui";
import DrawerIcon from "@material-ui/icons/Info";

function Component() {
  return (
    <Page
      header={<Header LeftAction={<BackIconButton />}>About</Header>}
      content={<Content>About content</Content>}
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
};
