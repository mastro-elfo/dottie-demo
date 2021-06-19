import { Grid } from "@material-ui/core";

export default function Responsive({
  children,
  xs = false,
  sm = false,
  md = false,
  lg = false,
  xl = false,
  ContainerProps = {},
  ItemProps = {},
}) {
  return (
    <Grid container {...ContainerProps}>
      <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl} {...ItemProps}>
        {children}
      </Grid>
    </Grid>
  );
}
