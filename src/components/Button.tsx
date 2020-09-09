import React, { ReactElement } from "react";
import clsx from "clsx";
import { Childfree } from "../utils";

export type ButtonProps = {
  text: string;
  color: "green" | "red";
  variant: "filled" | "outlined";
  icon?: ReactElement<React.SVGProps<SVGSVGElement>>;
} & Childfree<React.ButtonHTMLAttributes<HTMLButtonElement>>;

const colorToCss: Record<ButtonProps["color"], string> = {
  green: "btn-green",
  red: "btn-red",
};

const filledToCss: Record<ButtonProps["color"], string> = {
  green: "btn-green-fill",
  red: "btn-red-fill",
};

export const Button = (props: ButtonProps) => {
  const { text, color, variant, icon, className, ...otherProps } = props;

  const styles = clsx(
    "btn space-x-2",
    colorToCss[color],
    variant === "filled" && filledToCss[color],
    className
  );

  return (
    <button className={styles} {...otherProps}>
      {icon}
      <span>{text}</span>
    </button>
  );
};
