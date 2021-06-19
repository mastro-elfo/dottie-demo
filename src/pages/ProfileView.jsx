import { BackIconButton, Content, Header, Page } from "mastro-elfo-mui";
import DrawerIcon from "@material-ui/icons/Face";

function Component() {
  return (
    <Page
      header={<Header LeftAction={<BackIconButton />}>Profileview</Header>}
      content={<Content>Profileview content</Content>}
    />
  );
}

export const route = {
  path: "/profileview",
  exact: true,
  component: Component,
};

export const drawer = {
  key: "profileview",
  primary: "Profile",
  secondary: "",
  icon: <DrawerIcon />,
  title: "Open Profile",
};
