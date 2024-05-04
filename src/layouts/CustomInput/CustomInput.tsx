import { Check, Clear } from "@mui/icons-material";
import { FormControl, Input, InputLabel } from "@mui/material";
import PropTypes from "prop-types";
import "./../../index.css";

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

  const labelClasses = `${error ? "text-danger-100" : " "} ${
    success && !error ? "text-success-100" : " "
  }`;

  const underlineClasses = `${error ? "after:border-danger-100" : " "} ${
    success && !error
      ? "after:border-success-100"
      : "hover:!border-gray-500 hover:!border-2 hover:!border-solid after:border-primary-100"
  }`;

  const marginTop = `${labelText === undefined ? "mt-4" : " "}`;

  return (
    <FormControl
      {...formControlProps}
      className="pb-2.5 mt-[27px] relative align-middle"
    >
      {labelText !== undefined ? (
        <InputLabel
          htmlFor={id}
          {...labelProps}
          className={
            "!text-gray-400 font-normal text-sm leading-7" + labelClasses
          }
        >
          {labelText}
        </InputLabel>
      ) : null}

      <Input
        id={id}
        {...inputProps}
        className={"before:!bg-transparent" + marginTop + underlineClasses}
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
