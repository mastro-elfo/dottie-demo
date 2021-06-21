import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import {
  LOG_DEBUG,
  LOG_INFO,
  LOG_WARNING,
  LOG_ERROR,
  LOG_NONE,
} from "../controllers/log";

import DebugIcon from "@material-ui/icons/Code";
import InfoIcon from "@material-ui/icons/Info";
import WarningIcon from "@material-ui/icons/Warning";
import ErrorIcon from "@material-ui/icons/Error";

const MAP_ICONS = {
  [LOG_DEBUG]: <DebugIcon />,
  [LOG_INFO]: <InfoIcon />,
  [LOG_WARNING]: <WarningIcon />,
  [LOG_ERROR]: <ErrorIcon />,
};

export default function LogItem({
  loading = false,
  severity = LOG_NONE,
  cDateTime = 0,
  cAuthor = null,
  type = LOG_NONE,
  table = LOG_NONE,
  short = "",
}) {
  const { name, surname } = cAuthor
    ? cAuthor
    : { name: "Unknown", surname: "User" };

  return (
    <ListItem>
      <ListItemIcon>
        {loading ? <Skeleton /> : MAP_ICONS[severity] || <span />}
      </ListItemIcon>
      <ListItemText
        primary={
          loading ? (
            <Skeleton />
          ) : short ? (
            short
          ) : (
            `${name} ${surname} ${type} ${table}`
          )
        }
        secondary={
          loading ? (
            <Skeleton />
          ) : (
            `${severity} - ${new Date(cDateTime).toLocaleString()}`
          )
        }
      />
    </ListItem>
  );
}
