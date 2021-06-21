import { useState } from "react";

import { List, ListItem, ListItemText } from "@material-ui/core";
import {
  BackIconButton,
  ConfirmDialog,
  Content,
  Header,
  Page,
} from "mastro-elfo-mui";

import DrawerIcon from "@material-ui/icons/Info";

import { version } from "../version.json";

function Component() {
  return (
    <Page
      header={
        <Header withContainer leftAction={<BackIconButton />}>
          About
        </Header>
      }
      content={
        <Content>
          <List>
            <ListItem>
              <ListItemText primary={version} secondary="Version" />
            </ListItem>
            <LicenseListItem />
          </List>
        </Content>
      }
    />
  );
}

function LicenseListItem() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ListItem button onClick={() => setOpen(true)}>
        <ListItemText primary="MIT" secondary="License" />
      </ListItem>
      <ConfirmDialog
        open={open}
        onClose={() => setOpen(false)}
        title="MIT License"
        confirm="Read"
        onConfirm={() => setOpen(false)}
        content={[
          "Copyright (c) 2020 Francesco Michienzi",
          'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:',
          "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.",
          'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',
        ]}
      />
    </>
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
  href: "/about",
};
