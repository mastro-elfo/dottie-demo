import { useSelector } from "react-redux";

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

import { TimelineAvatar } from "../components";
import { DottieContent } from "../containers";

function Component() {
  const { logged } = useSelector((state) => state.login);
  // console.log(logged);
  const admin = logged.admin.is;

  return (
    <Page
      header={
        <Header
          leftAction={
            <DrawerIconButton>
              <DrawerLists
                lists={[
                  {
                    key: "pages",
                    items: [
                      profileView,
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
          rightAction={<TimelineAvatar user={logged} />}
        >
          Timeline, {logged.name} {logged.surname}
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
