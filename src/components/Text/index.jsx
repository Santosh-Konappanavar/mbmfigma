import React from "react";

const sizes = {
  xs: "text-[13px] font-normal",
  s: "text-sm font-normal",
  "3xl": "text-[19px] font-medium",
  xl: "text-[17px] font-normal",
  md: "text-[15px] font-medium",
};

const Text = ({ children, className = "", as, size = "xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-700_01 font-raleway ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
