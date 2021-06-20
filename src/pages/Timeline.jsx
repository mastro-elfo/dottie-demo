import { useSelector } from "react-redux";

import { IconButton } from "@material-ui/core";

import {
  DrawerIconButton,
  DrawerLists,
  // Push,
  Content,
  Header,
  Page,
} from "mastro-elfo-mui";

import { drawer as about } from "./About";
import { drawer as log } from "./Log";
import { drawer as settings } from "./Settings";
import { drawer as users } from "./Users";
import { drawer as profileView } from "./ProfileView";

import { TimelineDrawerToolbar } from "../components";
import { DottieContent } from "../containers";

import LogoutIcon from "@material-ui/icons/ExitToApp";

function Component() {
  const { logged } = useSelector((state) => state.login);
  // console.log(logged);
  const admin = logged.admin.is;

  return (
    <Page
      header={
        <Header
          withContainer
          leftAction={
            <DrawerIconButton>
              <TimelineDrawerToolbar subtitle={admin ? "Admin" : ""}>
                {logged.name} {logged.surname}
              </TimelineDrawerToolbar>
              <DrawerLists
                lists={[
                  {
                    key: "pages",
                    items: [
                      {
                        ...profileView,
                        action: (
                          <IconButton>
                            <LogoutIcon />
                          </IconButton>
                        ),
                      },
                      admin ? users : null,
                      admin ? settings : null,
                      admin ? log : null,
                      about,
                    ],
                  },
                ]}
              />
            </DrawerIconButton>
          }
        >
          Timeline
        </Header>
      }
      content={
        <Content>
          <DottieContent user={logged} />
        </Content>
      }
    />
  );
}

export const route = {
  path: "/",
  exact: true,
  component: Component,
};

// export const drawer = {
//   key: "timeline",
//   primary: "Timeline",
//   secondary: "",
//   icon: <DrawerIcon/>,
//   title: "Open Timeline"
// }
