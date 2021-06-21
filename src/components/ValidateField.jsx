import { useMemo } from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

export default function ValidateField({
  children,
  Component = TextField,
  validateFn = () => null,
  validateArgs = [],
  ...props
}) {
  const result = useMemo(
    () => {
      return validateFn(...validateArgs);
    },
    // eslint-disable-next-line
    [...validateArgs, validateFn]
  );
  return (
    <Component {...result} {...props}>
      {children}
    </Component>
  );
}

ValidateField.propTypes = {
  children: PropTypes.node,
  Component: PropTypes.elementType,
  validateFn: PropTypes.func,
  validateArgs: PropTypes.array,
};
