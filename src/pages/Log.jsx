import { useEffect, useState } from "react";
import { BackIconButton, Content, Header, Page } from "mastro-elfo-mui";
import { LogList } from "../components";

import { readAll } from "../controllers/log";

import DrawerIcon from "@material-ui/icons/ViewList";

function Component() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    readAll()
      .then((list) => {
        setItems(list);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  return (
    <Page
      header={
        <Header withContainer leftAction={<BackIconButton />}>
          Log
        </Header>
      }
      content={
        <Content>
          <LogList items={items} loading={loading} />
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
