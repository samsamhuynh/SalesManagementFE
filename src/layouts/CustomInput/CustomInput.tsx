import { Check, Clear } from "@mui/icons-material";
import { FormControl, Input, InputLabel } from "@mui/material";
import PropTypes from "prop-types";
import "./../../index.scss";
import classNames from "classnames";

const CustomInput = (props: any) => {
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    success,
  } = props;

  const labelClasses = classNames({
    "text-danger-100": error,
    "text-success-100": success && !error,
  });

  const underlineClasses = classNames({
    "after:border-danger-100": error,
    "after:border-success-100": success && !error,
    "before:!border-gray-500 before::!border-2 after:border-primary-100": true,
  });

  const marginTop = classNames({
    "mt-4": labelText === undefined,
  });

  return (
    <FormControl
      {...formControlProps}
      className={classNames(formControlProps)}
      style={{
        paddingBottom: "10px",
        position: "relative",
        verticalAlign: "unset",
      }}
    >
      {labelText !== undefined ? (
        <InputLabel
          // color="primary"
          htmlFor={id}
          {...labelProps}
          className={classNames(labelClasses)}
          style={{
            color: "#D2D2D2" + " !important",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "1.42857",
            letterSpacing: "unset",
          }}
        >
          {labelText}
        </InputLabel>
      ) : null}

      <Input
        className={{
          root: marginTop,
          disabled: "before:!bg-transparent",
          // underline: underlineClasses,
        }}
        id={id}
        {...inputProps}
      >
        {error ? (
          <Clear
            // className="absolute block right-0 top-5 z-20 w-6 h-6 text-center pointer-events-none text-danger-100"
            style={{
              position: "absolute",
              display: "block",
              zIndex: "2",
              top: "18px",
              right: "0",
              width: "24px",
              height: "24px",
              textAlign: "center",
              pointerEvents: "none",
              color: "#f44336",
            }}
          />
        ) : success ? (
          <Check
            style={{
              position: "absolute",
              display: "block",
              zIndex: "2",
              top: "18px",
              right: "0",
              width: "24px",
              height: "24px",
              textAlign: "center",
              pointerEvents: "none",
              color: "#4caf50",
            }}
          />
        ) : null}
      </Input>
    </FormControl>
  );
};

CustomInput.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool,
};

export default CustomInput;
