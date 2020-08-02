import React, { FC } from "react";
import clsx from "clsx";

export const Button: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const { children, className, ...otherProps } = props;

  return (
    <button className={clsx("btn btn-green", className)} {...otherProps}>
      {children}
    </button>
  );
};
