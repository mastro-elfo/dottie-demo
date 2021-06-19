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

function Component() {
  return (
    <Page
      header={
        <Header
          LeftAction={
            <DrawerIconButton>
              <DrawerLists
                lists={[
                  {
                    key: "pages",
                    items: [about, log, settings, users, profileView],
                  },
                ]}
              />
            </DrawerIconButton>
          }
        >
          Timeline
        </Header>
      }
      content={<Content>Timeline content</Content>}
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
