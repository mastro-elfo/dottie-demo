import { BackIconButton, Content, Header, Page } from "mastro-elfo-mui";
import { LogList } from "../components";

import DrawerIcon from "@material-ui/icons/ViewList";

function Component() {
  return (
    <Page
      header={<Header leftAction={<BackIconButton />}>Log</Header>}
      content={
        <Content>
          <LogList
            items={[
              {
                id: 1,
                severity: "info",
                short: "Short description",
                description: "Long description",
                cDateTime: +new Date(),
                cAuthor: null,
                type: "create",
                table: "users",
              },
            ]}
          />
        </Content>
      }
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
  href: "/log",
};
