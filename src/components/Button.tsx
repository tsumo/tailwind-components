import React, { FC } from "react";
import clsx from "clsx";

export type ButtonProps = {
  color: "green" | "red";
  variant: "filled" | "outline";
};

const colorToCss: Record<ButtonProps["color"], string> = {
  green: "btn-green",
  red: "btn-red",
};

const filledToCss: Record<ButtonProps["color"], string> = {
  green: "btn-green-fill",
  red: "btn-red-fill",
};

export const Button: FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  const { children, color, variant, className, ...otherProps } = props;

  const styles = clsx(
    "btn",
    colorToCss[color],
    variant === "filled" && filledToCss[color],
    className
  );

  return (
    <button className={styles} {...otherProps}>
      {children}
    </button>
  );
};
