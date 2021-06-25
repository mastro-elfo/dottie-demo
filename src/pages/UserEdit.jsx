import { BackIconButton, Content, Header, Page } from "mastro-elfo-mui";
import DrawerIcon from "@material-ui/icons/BrokenImage";

function Component() {
  return (
    <Page
      header={
        <Header withContainer leftAction={<BackIconButton />}>
          Useredit
        </Header>
      }
      content={<Content>Useredit content</Content>}
    />
  );
}

export const route = {
  path: "/useredit",
  exact: true,
  component: Component,
};

export const drawer = {
  key: "useredit",
  primary: "Useredit",
  secondary: "",
  icon: <DrawerIcon />,
  title: "Open Useredit",
};
