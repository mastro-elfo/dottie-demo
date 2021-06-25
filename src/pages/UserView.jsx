import { BackIconButton, Content, Header, Page } from "mastro-elfo-mui";
import DrawerIcon from "@material-ui/icons/BrokenImage";

function Component() {
  return (
    <Page
      header={
        <Header withContainer leftAction={<BackIconButton />}>
          Userview
        </Header>
      }
      content={<Content>Userview content</Content>}
    />
  );
}

export const route = {
  path: "/userview",
  exact: true,
  component: Component,
};

export const drawer = {
  key: "userview",
  primary: "Userview",
  secondary: "",
  icon: <DrawerIcon />,
  title: "Open Userview",
};
