import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[11px]",
};
const variants = {
  fill: {
    yellow_900: "bg-yellow-900 text-white-A700",
    orange_A700: "bg-orange-A700 text-white-A700",
    deep_orange_A200: "bg-deep_orange-A200 text-white-A700",
  },
};
const sizes = {
  md: "h-[50px] px-[35px] text-xl",
  "2xl": "h-[57px] px-[35px] text-[21px]",
  sm: "h-[46px] px-[35px] text-[17px]",
  lg: "h-[51px] px-[13px] text-[17px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer text-white-A700 ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "2xl", "sm", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["yellow_900", "orange_A700", "deep_orange_A200"]),
};

export { Button };
