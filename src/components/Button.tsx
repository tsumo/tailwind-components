import React, { FC } from "react";
import clsx from "clsx";

type ButtonProps = {
  color: "green" | "red";
};

const colorToClassName: Record<ButtonProps["color"], string> = {
  green: "btn-green",
  red: "btn-red",
};

export const Button: FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  const { children, color, className, ...otherProps } = props;

  return (
    <button
      className={clsx("btn", colorToClassName[color], className)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
