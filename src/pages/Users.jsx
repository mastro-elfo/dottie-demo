import { BackIconButton, Content, Header, Page } from "mastro-elfo-mui";
import DrawerIcon from "@material-ui/icons/People";

function Component() {
  return (
    <Page
      header={
        <Header withContainer leftAction={<BackIconButton />}>
          Users
        </Header>
      }
      content={<Content>Users content</Content>}
    />
  );
}

export const route = {
  path: "/users",
  exact: true,
  component: Component,
};

export const drawer = {
  key: "users",
  primary: "Users",
  secondary: "",
  icon: <DrawerIcon />,
  title: "Open Users",
  href: "/users",
};
