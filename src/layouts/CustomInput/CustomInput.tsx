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
      className={classNames(
        "pb-2.5 mt-[27px] relative align-middle" + formControlProps
      )}
    >
      {labelText !== undefined ? (
        <InputLabel
          // color="primary"
          htmlFor={id}
          {...labelProps}
          classes={classNames(
            "!text-gray-400 font-normal text-sm leading-7 no-underline" +
              labelClasses
          )}
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
          <Clear className="absolute block right-0 top-5 z-20 w-6 h-6 text-center pointer-events-none text-danger-100" />
        ) : success ? (
          <Check className="absolute block right-0 top-5 z-20 w-6 h-6 text-center pointer-events-none text-success-100" />
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
