import { Button } from "@mui/material";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./../../index.scss";

const RegularButton = (props: any) => {
  const {
    color,
    round,
    children,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    onClick,
    muiClasses,
    ...rest
  } = props;

  // const btnClasses = classNames(
  //   "min-h-auto",
  //   "min-w-auto",
  //   // "bg-gray-100",
  //   "text-white",
  //   "font-normal",
  //   "text-xs",
  //   "leading-7",
  //   "text-center",
  //   "uppercase",
  //   "tracking-normal",
  //   "whitespace-nowrap",
  //   "align-middle",
  //   "border-0",
  //   "rounded-sm",
  //   "relative",
  //   // "py-3",
  //   // "px-8",
  //   "m-1",
  //   "touch-manipulation",
  //   "cursor-pointer",
  //   "will-change-transform",
  //   "transition-all",
  //   // "shadow-md",
  //   "ease-in-out",
  //   "duration-300",
  //   // "hover:text-white",
  //   // "hover:bg-gray-1200",
  //   // "hover:shadow-lg",
  //   {
  //     "relative inline-block top-0 w-[18px] h-[18px] mr-2 aligh-middle":
  //       children === "svg",
  //     "relative inline-block top-0 -my-4 mr-2 aligh-middle text-lg":
  //       children === ".fab,& .fas,& .far,& .fal, &.material-icons",
  //     "absolute mt-0 w-full h-full left-0 top-0 leading-10 text-xl":
  //       children && justIcon === ".fab,& .fas,& .far,& .fal, &.material-icons",
  //     "bg-gray-100": color === "gray",
  //     "bg-rose-100": color === "rose",
  //     "bg-primary-100": color === "primary",
  //     "bg-info-100": color === "info",
  //     "bg-success-100": color === "success",
  //     "bg-warning-100": color === "warning",
  //     "bg-danger-100": color === "danger",
  //     "bg-white text-gray-100": color === "white",
  //     "bg-transparent text-inherit": color === "transparent",
  //     "rounded-full": round,
  //     "disabled:opacity-65 disabled:pointer-events-none": disabled,
  //     "hover:text-gray-100 hover:bg-transparent hover:shadow-none hover:text-white":
  //       simple && color === "transparent",
  //     "hover:text-rose-100": simple && color === "rose",
  //     "hover:text-primary-100": simple && color === "primary",
  //     "hover:text-info-100": simple && color === "info",
  //     "hover:text-success-100": simple && color === "success",
  //     "hover:text-warning-100": simple && color === "warning",
  //     "hover:text-danger-100": simple && color === "danger",
  //     "!w-full": block,
  //     "hover:bg-transparent hover:text-gray-100 hover:shadow-none": link,
  //     "px-3 w-10 h-10 text-xl mr-0": justIcon,
  //     "min-w-14 w-14 h-14 text-3xl leading-[56px]": justIcon && size === "md",
  //     "min-w-7 w-7 h-7 text-lg leading-7": justIcon && size === "sm",
  //   },
  //   className
  // );

  return (
    <Button
      color="inherit"
      classes={muiClasses}
      {...rest}
      className={classNames(
        "min-h-auto",
        "min-w-auto",
        // "bg-gray-100",
        "text-white",
        "font-normal",
        "text-xs",
        "leading-7",
        "text-center",
        "uppercase",
        "tracking-normal",
        "whitespace-nowrap",
        "align-middle",
        "border-0",
        "rounded-sm",
        "relative",
        // "py-3",
        // "px-8",
        "m-1",
        "touch-manipulation",
        "cursor-pointer",
        "will-change-transform",
        "transition-all",
        // "shadow-md",
        "ease-in-out",
        "duration-300",
        // "hover:text-white",
        // "hover:bg-gray-1200",
        // "hover:shadow-lg",
        {
          "relative inline-block top-0 w-[18px] h-[18px] mr-2 aligh-middle":
            children === "svg",
          "relative inline-block top-0 -my-4 mr-2 aligh-middle text-lg":
            children === ".fab,& .fas,& .far,& .fal, &.material-icons",
          "absolute mt-0 w-full h-full left-0 top-0 leading-10 text-xl":
            children &&
            justIcon === ".fab,& .fas,& .far,& .fal, &.material-icons",
          "bg-gray-100": color === "gray",
          "bg-rose-100": color === "rose",
          "bg-primary-100": color === "primary",
          "bg-info-100": color === "info",
          "bg-success-100": color === "success",
          "bg-warning-100": color === "warning",
          "bg-danger-100": color === "danger",
          "bg-white text-gray-100": color === "white",
          "bg-transparent text-inherit": color === "transparent",
          "rounded-full": round,
          "disabled:opacity-65 disabled:pointer-events-none": disabled,
          "hover:text-gray-100 hover:bg-transparent hover:shadow-none hover:text-white":
            simple && color === "transparent",
          "hover:text-rose-100": simple && color === "rose",
          "hover:text-primary-100": simple && color === "primary",
          "hover:text-info-100": simple && color === "info",
          "hover:text-success-100": simple && color === "success",
          "hover:text-warning-100": simple && color === "warning",
          "hover:text-danger-100": simple && color === "danger",
          "!w-full": block,
          "hover:bg-transparent hover:text-gray-100 hover:shadow-none": link,
          "px-3 w-10 h-10 text-xl mr-0": justIcon,
          "min-w-14 w-14 h-14 text-3xl leading-[56px]":
            justIcon && size === "md",
          "min-w-7 w-7 h-7 text-lg leading-7": justIcon && size === "sm",
        },
        className
      )}
    >
      {children}
    </Button>
  );
};

RegularButton.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "transparent",
  ]),
  size: PropTypes.oneOf(["sm", "md"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.object,
  muiClasses: PropTypes.object,
};

export default RegularButton;
