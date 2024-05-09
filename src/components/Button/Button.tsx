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
  //     "pr-3 pl-3 min-w-[41px] w-[41px] h-[41px] text-xl": justIcon,
  //     "w-14 h-14 text-3xl leading-[56px]": justIcon && size === "md",
  //     "w-7 h-7 text-lg leading-7": justIcon && size === "sm",
  //   },
  //   className
  // );

  const btnClasses = classNames({
    button: {
      minHeight: "auto",
      minWidth: "auto",
      backgroundColor: "#999",
      color: "#FFF",
      // boxShadow:
      //   "0 2px 2px 0 rgba(" +
      //   hexToRgb("#999") +
      //   ", 0.14), 0 3px 1px -2px rgba(" +
      //   hexToRgb("#999") +
      //   ", 0.2), 0 1px 5px 0 rgba(" +
      //   hexToRgb("#999") +
      //   ", 0.12)",
      border: "none",
      borderRadius: "3px",
      position: "relative",
      padding: "12px 30px",
      margin: ".3125rem 1px",
      fontSize: "12px",
      fontWeight: "400",
      textTransform: "uppercase",
      letterSpacing: "0",
      willChange: "box-shadow, transform",
      transition:
        "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      lineHeight: "1.42857143",
      textAlign: "center",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      touchAction: "manipulation",
      cursor: "pointer",
      "&:hover,&:focus": {
        color: "#FFF",
        backgroundColor: "#999",
        // boxShadow:
        //   "0 14px 26px -12px rgba(" +
        //   hexToRgb("#999") +
        //   ", 0.42), 0 4px 23px 0px rgba(" +
        //   hexToRgb("#000") +
        //   ", 0.12), 0 8px 10px -5px rgba(" +
        //   hexToRgb("#999") +
        //   ", 0.2)",
      },
      "& .fab,& .fas,& .far,& .fal, &.material-icons": {
        position: "relative",
        display: "inline-block",
        top: "0",
        marginTop: "-1em",
        marginBottom: "-1em",
        fontSize: "1.1rem",
        marginRight: "4px",
        verticalAlign: "middle",
      },
      "& svg": {
        position: "relative",
        display: "inline-block",
        top: "0",
        width: "18px",
        height: "18px",
        marginRight: "4px",
        verticalAlign: "middle",
      },
      "&$justIcon": {
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
          marginTop: "0px",
          position: "absolute",
          width: "100%",
          transform: "none",
          left: "0px",
          top: "0px",
          height: "100%",
          lineHeight: "41px",
          fontSize: "20px",
        },
      },
    },
    white: {
      "&,&:focus,&:hover": {
        backgroundColor: "#FFF",
        color: "#999",
      },
    },
    rose: {
      backgroundColor: "#e91e63",
      // boxShadow:
      //   "0 2px 2px 0 rgba(" +
      //   hexToRgb("#e91e63") +
      //   ", 0.14), 0 3px 1px -2px rgba(" +
      //   hexToRgb("#e91e63") +
      //   ", 0.2), 0 1px 5px 0 rgba(" +
      //   hexToRgb("#e91e63") +
      //   ", 0.12)",
      "&:hover,&:focus": {
        backgroundColor: "#e91e63",
        // boxShadow:
        //   "0 14px 26px -12px rgba(" +
        //   hexToRgb("#e91e63") +
        //   ", 0.42), 0 4px 23px 0px rgba(" +
        //   hexToRgb("#000") +
        //   ", 0.12), 0 8px 10px -5px rgba(" +
        //   hexToRgb("#e91e63") +
        //   ", 0.2)",
      },
    },
    primary: {
      backgroundColor: "#9c27b0",
      // boxShadow:
      //   "0 2px 2px 0 rgba(" +
      //   hexToRgb("#9c27b0") +
      //   ", 0.14), 0 3px 1px -2px rgba(" +
      //   hexToRgb("#9c27b0") +
      //   ", 0.2), 0 1px 5px 0 rgba(" +
      //   hexToRgb("#9c27b0") +
      //   ", 0.12)",
      "&:hover,&:focus": {
        backgroundColor: "#9c27b0",
        // boxShadow:
        //   "0 14px 26px -12px rgba(" +
        //   hexToRgb("#9c27b0") +
        //   ", 0.42), 0 4px 23px 0px rgba(" +
        //   hexToRgb("#000") +
        //   ", 0.12), 0 8px 10px -5px rgba(" +
        //   hexToRgb("#9c27b0") +
        //   ", 0.2)",
      },
    },
    info: {
      backgroundColor: "#00acc1",
      // boxShadow:
      //   "0 2px 2px 0 rgba(" +
      //   hexToRgb("#00acc1") +
      //   ", 0.14), 0 3px 1px -2px rgba(" +
      //   hexToRgb("#00acc1") +
      //   ", 0.2), 0 1px 5px 0 rgba(" +
      //   hexToRgb("#00acc1") +
      //   ", 0.12)",
      "&:hover,&:focus": {
        backgroundColor: "#00acc1",
        // boxShadow:
        //   "0 14px 26px -12px rgba(" +
        //   hexToRgb("#00acc1") +
        //   ", 0.42), 0 4px 23px 0px rgba(" +
        //   hexToRgb("#000") +
        //   ", 0.12), 0 8px 10px -5px rgba(" +
        //   hexToRgb("#00acc1") +
        //   ", 0.2)",
      },
    },
    success: {
      backgroundColor: "#4caf50",
      // boxShadow:
      //   "0 2px 2px 0 rgba(" +
      //   hexToRgb("#4caf50") +
      //   ", 0.14), 0 3px 1px -2px rgba(" +
      //   hexToRgb("#4caf50") +
      //   ", 0.2), 0 1px 5px 0 rgba(" +
      //   hexToRgb("#4caf50") +
      //   ", 0.12)",
      "&:hover,&:focus": {
        backgroundColor: "#4caf50",
        // boxShadow:
        //   "0 14px 26px -12px rgba(" +
        //   hexToRgb("#4caf50") +
        //   ", 0.42), 0 4px 23px 0px rgba(" +
        //   hexToRgb("#000") +
        //   ", 0.12), 0 8px 10px -5px rgba(" +
        //   hexToRgb("#4caf50") +
        //   ", 0.2)",
      },
    },
    warning: {
      backgroundColor: "#ff9800",
      // boxShadow:
      //   "0 2px 2px 0 rgba(" +
      //   hexToRgb("#ff9800") +
      //   ", 0.14), 0 3px 1px -2px rgba(" +
      //   hexToRgb("#ff9800") +
      //   ", 0.2), 0 1px 5px 0 rgba(" +
      //   hexToRgb("#ff9800") +
      //   ", 0.12)",
      "&:hover,&:focus": {
        backgroundColor: "#ff9800",
        // boxShadow:
        //   "0 14px 26px -12px rgba(" +
        //   hexToRgb("#ff9800") +
        //   ", 0.42), 0 4px 23px 0px rgba(" +
        //   hexToRgb("#000") +
        //   ", 0.12), 0 8px 10px -5px rgba(" +
        //   hexToRgb("#ff9800") +
        //   ", 0.2)",
      },
    },
    danger: {
      backgroundColor: "#f44336",
      // boxShadow:
      //   "0 2px 2px 0 rgba(" +
      //   hexToRgb("#f44336") +
      //   ", 0.14), 0 3px 1px -2px rgba(" +
      //   hexToRgb("#f44336") +
      //   ", 0.2), 0 1px 5px 0 rgba(" +
      //   hexToRgb("#f44336") +
      //   ", 0.12)",
      "&:hover,&:focus": {
        backgroundColor: "#f44336",
        // boxShadow:
        //   "0 14px 26px -12px rgba(" +
        //   hexToRgb("#f44336") +
        //   ", 0.42), 0 4px 23px 0px rgba(" +
        //   hexToRgb("#000") +
        //   ", 0.12), 0 8px 10px -5px rgba(" +
        //   hexToRgb("#f44336") +
        //   ", 0.2)",
      },
    },
    simple: {
      "&,&:focus,&:hover": {
        color: "#FFF",
        background: "transparent",
        boxShadow: "none",
      },
      "&$rose": {
        "&,&:focus,&:hover,&:visited": {
          color: "#e91e63",
        },
      },
      "&$primary": {
        "&,&:focus,&:hover,&:visited": {
          color: "#9c27b0",
        },
      },
      "&$info": {
        "&,&:focus,&:hover,&:visited": {
          color: "#00acc1",
        },
      },
      "&$success": {
        "&,&:focus,&:hover,&:visited": {
          color: "#4caf50",
        },
      },
      "&$warning": {
        "&,&:focus,&:hover,&:visited": {
          color: "#ff9800",
        },
      },
      "&$danger": {
        "&,&:focus,&:hover,&:visited": {
          color: "#f44336",
        },
      },
    },
    transparent: {
      "&,&:focus,&:hover": {
        color: "inherit",
        background: "transparent",
        boxShadow: "none",
      },
    },
    disabled: {
      opacity: "0.65",
      pointerEvents: "none",
    },
    lg: {
      padding: "1.125rem 2.25rem",
      fontSize: "0.875rem",
      lineHeight: "1.333333",
      borderRadius: "0.2rem",
    },
    sm: {
      padding: "0.40625rem 1.25rem",
      fontSize: "0.6875rem",
      lineHeight: "1.5",
      borderRadius: "0.2rem",
    },
    round: {
      borderRadius: "30px",
    },
    block: {
      width: "100% !important",
    },
    link: {
      "&,&:hover,&:focus": {
        backgroundColor: "transparent",
        color: "#999",
        boxShadow: "none",
      },
    },
    justIcon: {
      paddingLeft: "12px",
      paddingRight: "12px",
      fontSize: "20px",
      height: "41px",
      minWidth: "41px",
      width: "41px",
      "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
        marginRight: "0px",
      },
      "&$lg": {
        height: "57px",
        minWidth: "57px",
        width: "57px",
        lineHeight: "56px",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
          fontSize: "32px",
          lineHeight: "56px",
        },
        "& svg": {
          width: "32px",
          height: "32px",
        },
      },
      "&$sm": {
        height: "30px",
        minWidth: "30px",
        width: "30px",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
          fontSize: "17px",
          lineHeight: "29px",
        },
        "& svg": {
          width: "17px",
          height: "17px",
        },
      },
    },
  });

  return (
    <Button
      color="inherit"
      classes={muiClasses}
      {...rest}
      className={btnClasses}
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
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  muiClasses: PropTypes.object,
};

export default RegularButton;
