import React, { FC } from "react";
import clsx from "clsx";

type ButtonProps = {
  variant: "green" | "red";
};

const variantToClassName: Record<ButtonProps["variant"], string> = {
  green: "btn-green",
  red: "btn-red",
};

export const Button: FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  const { children, variant, className, ...otherProps } = props;

  return (
    <button
      className={clsx("btn", variantToClassName[variant], className)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
