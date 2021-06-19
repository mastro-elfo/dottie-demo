import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";

export default function Responsive({
  children,
  Container = DefaultContainer,
  ContainerProps = {},
  Item = DefaultItem,
  ...rest
}) {
  return (
    <Container {...ContainerProps}>
      <Item {...rest}>{children}</Item>
    </Container>
  );
}

function DefaultContainer({ children, ...props }) {
  return (
    <Grid container {...props}>
      {children}
    </Grid>
  );
}

function DefaultItem({ children, ...props }) {
  return (
    <Grid item {...props}>
      {children}
    </Grid>
  );
}

Responsive.propTypes = {
  children: PropTypes.node,
  Container: PropTypes.node,
  ContainerProps: PropTypes.object,
  Item: PropTypes.node,
};
