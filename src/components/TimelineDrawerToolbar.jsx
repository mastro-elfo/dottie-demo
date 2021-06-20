import { Box, Divider, Toolbar, Typography } from "@material-ui/core";

export default function TimelineDrawerToolbar({ children, subtitle = "" }) {
  return (
    <>
      <Toolbar>
        <Box>
          <Typography variant="h6">{children}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {subtitle}
          </Typography>
        </Box>
      </Toolbar>
      <Divider />
    </>
  );
}
