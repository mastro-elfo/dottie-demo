import { BrowserRouter } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import primary from "@material-ui/core/colors/blue";
import secondary from "@material-ui/core/colors/pink";
import { AppContainer } from "mastro-elfo-mui";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

// Date/Time picker locales
// import itLocale from "date-fns/locale/it";

import { route as about } from "./pages/About";
import { route as log } from "./pages/Log";
import { route as profileEdit } from "./pages/ProfileEdit";
import { route as profileView } from "./pages/ProfileView";
import { route as settings } from "./pages/Settings";
import { route as timeline } from "./pages/Timeline";
import { route as userCreate } from "./pages/UserCreate";
import { route as userEdit } from "./pages/UserEdit";
import { route as userView } from "./pages/UserView";
import { route as users } from "./pages/Users";

import { FirstAccess, Login } from "./containers";

// Locale map for date/time pickers
const LOCALE_MAP = {
  // it: itLocale,
};

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  return (
    <AppContainer
      ThemeProps={{
        palette: {
          primary,
          secondary,
          type: prefersDarkMode ? "dark" : "light",
        },
      }}
      RouterProps={{
        Router: BrowserRouter,
        basename: "dottie-demo",
        routes: [
          about,
          log,
          profileEdit,
          profileView,
          settings,
          timeline,
          userCreate,
          userEdit,
          userView,
          users,
        ],
        WrapperProps: {
          components: [
            {
              Component: FirstAccess,
            },
            {
              Component: Login,
            },
            {
              Component: MuiPickersUtilsProvider,
              utils: DateFnsUtils,
              locale: LOCALE_MAP[window.navigator.language.substr(0, 2)],
            },
          ],
        },
      }}
    />
  );
}
