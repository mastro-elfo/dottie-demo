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

export default function DottieItem({
  datetime = 0,
  title = "",
  note = "",
  author = { name: "", surname: "" },
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
            date.toLocaleDateString(undefined, { dateStyle: "long" })
          )}
        </Typography>
        <Typography variant="body2">
          {!!loading ? (
            <Skeleton width="25%" style={{ display: "inline-block" }} />
          ) : (
            date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          )}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h5">{!!loading ? <Skeleton /> : title}</Typography>
        <Typography variant="subtitle2" color="textSecondary">
          {!!loading ? (
            <>
              <Skeleton width="30%" style={{ display: "inline-block" }} />{" "}
              <Skeleton width="30%" style={{ display: "inline-block" }} />
            </>
          ) : (
            `${author.name} ${author.surname}`
          )}
        </Typography>
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
