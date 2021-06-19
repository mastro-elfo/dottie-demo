import { useMemo } from "react";

import { Typography } from "@material-ui/core";

import {
  TimelineContent,
  TimelineConnector,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";

export default function DottieItem({ datetime, title, note, author }) {
  const date = useMemo(() => new Date(datetime), [datetime]);

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="body2">
          {date.toLocaleDateString(undefined, { dateStyle: "long" })}
        </Typography>
        <Typography variant="body2">
          {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle2" color="textSecondary">
          {author.name} {author.surname}
        </Typography>
        <Typography paragraph>{note}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
}
