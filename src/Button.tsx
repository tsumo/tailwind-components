import React, { FC } from "react";
import clsx from "clsx";

const buttonStyles =
  "m-1 px-3 py-2 bg-green-600 hover:bg-green-700 border border-green-800 rounded text-white";

export const Button: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const { children, className, ...otherProps } = props;

  return (
    <button className={clsx(buttonStyles, className)} {...otherProps}>
      {children}
    </button>
  );
};
