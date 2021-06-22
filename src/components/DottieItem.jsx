import { useMemo } from "react";

import { Typography } from "@material-ui/core";
import {
  Skeleton,
  TimelineContent,
  TimelineConnector,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";

import { toLocaleString } from "../utils";

export default function DottieItem({
  datetime = 0,
  title = "",
  note = "",
  cAuthor = { name: "", surname: "" },
  loading = false,
}) {
  const date = useMemo(() => new Date(datetime), [datetime]);

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="body2">
          {!!loading ? (
            <Skeleton width="50%" style={{ display: "inline-block" }} />
          ) : (
            toLocaleString(date)
          )}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          {!!loading ? (
            <>
              <Skeleton width="30%" style={{ display: "inline-block" }} />{" "}
              <Skeleton width="30%" style={{ display: "inline-block" }} />
            </>
          ) : (
            `${cAuthor.name} ${cAuthor.surname}`
          )}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h5">{!!loading ? <Skeleton /> : title}</Typography>
        <Typography paragraph>
          {!!loading ? (
            <>
              <Skeleton width="75%" />
              <Skeleton width="50%" />
            </>
          ) : (
            note
          )}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}
