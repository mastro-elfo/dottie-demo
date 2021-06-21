import { BackIconButton, Content, Header, Page } from "mastro-elfo-mui";
import DrawerIcon from "@material-ui/icons/BrokenImage";

function Component() {
  return (
    <Page
      header={<Header leftAction={<BackIconButton />}>Profileedit</Header>}
      content={<Content>Profileedit content</Content>}
    />
  );
}

export const route = {
  path: "/profileedit",
  exact: true,
  component: Component,
};

export const drawer = {
  key: "profileedit",
  primary: "Profile Edit",
  secondary: "",
  icon: <DrawerIcon />,
  title: "Open Profile Edit",
};
