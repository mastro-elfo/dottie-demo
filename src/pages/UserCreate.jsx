

import { BackIconButton, Content, Header, Page } from "mastro-elfo-mui";
import DrawerIcon from "@material-ui/icons/BrokenImage";

function Component() {
  return (
    <Page
      header={<Header leftAction={<BackIconButton />}>Usercreate</Header>}
      content={<Content>Usercreate content</Content>}
    />
  );
}

export const route = {
  path: "/usercreate",
  exact: true,
  component: Component
};

export const drawer = {
  key: "usercreate",
  primary: "Usercreate",
  secondary: "",
  icon: <DrawerIcon/>,
  title: "Open Usercreate"
}

