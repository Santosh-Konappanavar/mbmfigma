import React from "react";

const sizes = {
  "3xl": "text-[23px] font-bold md:text-[21px]",
  "2xl": "text-xl font-semibold",
  "5xl": "text-[26px] font-bold md:text-2xl sm:text-[22px]",
  xl: "text-lg font-bold",
  "7xl": "text-[33px] font-bold md:text-[31px] sm:text-[29px]",
  "6xl": "text-[32px] font-semibold md:text-3xl sm:text-[28px]",
  s: "text-sm font-semibold",
  md: "text-base font-bold",
  "9xl": "text-5xl font-bold md:text-[44px] sm:text-[38px]",
  xs: "text-xs font-semibold",
  lg: "text-[17px] font-bold",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-500_02 font-dmsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
